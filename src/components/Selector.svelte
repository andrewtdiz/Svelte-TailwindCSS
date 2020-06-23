<script>
import StateStore from '../stores/StateStore.js'
import { selectedState } from '../stores/SelectedStateStore.js'

let selectorData;
let valueSelected;
let typeString = ''


StateStore.subscribe(data => {
    selectorData = data
})

selectedState.subscribe(val => {
    valueSelected = val
})

$: counties = selectorData.filter(val=> {
    return (val.name.toLowerCase().includes(typeString.toLowerCase()) & val.type=="County")
})

$: cities = selectorData.filter(val=> {
    return (val.name.toLowerCase().includes(typeString.toLowerCase()) & val.type=="City")
})

let select = function(val) {
    selectedState.update(n=> val)
    typeString = ''
}

</script>

<div class="relative flex flex-col z-20" style="width: 30rem;">
    <input placeholder={valueSelected} type="text" class="text-lg appearance-none outline-none focus:border-teal-500 px-2 py-2 w-3/4" bind:value={typeString}>
    {#if typeString!=''}
    <div class="absolute py-3 mt-1 bg-white  border shadow-md px-4 w-full rounded overflow-hidden" style="top:100%;">
        {#if counties.length > 0}
            <div class="w-full border-b border-gray-300">
                <p class="text-xl text-gray-700">Counties</p>
            </div>
            {#each counties.slice(0,3) as county}
                <h1 on:click={select(county.name)} class="hover:bg-blue-100 py-1 px-1 text-gray-700  text-md cursor-pointer">{@html county.name.replace(typeString, '<b>' + typeString + '</b>').replace(typeString.charAt(0).toUpperCase() + typeString.slice(1), '<b>' + typeString.charAt(0).toUpperCase() + typeString.slice(1) + '</b>')}</h1>
            {/each}
        {/if}
        {#if cities.length > 0}
            <div class="w-full {counties.length>3 ? 'mt-3' : ''} border-b border-gray-300">
                <p class="text-xl text-gray-700">Cities</p>
            </div>
            {#each cities.slice(0,3) as city}
                <h1 on:click={select(city.name)} class="hover:bg-blue-100 py-1 px-1 text-gray-700 text-md cursor-pointer">{@html city.name.replace(typeString, '<b>' + typeString + '</b>').replace(typeString.charAt(0).toUpperCase() + typeString.slice(1), '<b>' + typeString.charAt(0).toUpperCase() + typeString.slice(1) + '</b>')}</h1>
            {/each}
        {/if}
        {#if counties.length+cities.length > 3}
            <div class="w-full flex justify-center">
                <h1 class="text-sm text-blue-500">+{counties.length+cities.length-6} results</h1>
            </div>
        {/if}
        {#if counties.length+cities.length==0}
                        <h1 class="text-sm">No results for "{typeString}"</h1>

        {/if}

    </div>
    {/if}    
</div>


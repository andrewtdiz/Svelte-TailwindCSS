<script>
  export let name;
  export let score
  let showControls = false
</script>

<div>
  <p> { name } </p>
  <p> { score } </p>
  {#if showControls}
  <button class="px-4 py-1 bg-blue-500 text-white rouned" on:click={() => score += 1}> +1 </button>
  <button class="px-4 py-1 bg-blue-500 text-white rouned" on:click={() => score -= 1}> -1 </button>
  {/if}
  <button on:click={() => showControls = !showControls }>{showControls ? 'Truth' : 'Falso'}</button>
</div>

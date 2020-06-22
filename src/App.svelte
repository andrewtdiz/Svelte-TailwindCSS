<script>
  import Player from './Player.svelte'
  import Tailwindcss from "./Tailwindcss.svelte";

  let players = [
    {
      name: 'John',
      score: 0,
    },
    {
      name: 'Ann',
      score: 5
    }
  ]
</script>

<style>
* {
  box-sizing: border-box;
}
</style>

<Tailwindcss />
<main>
  {#if players.length==0}
    <p>No players</p>
  {:else}
    {#each players as player }
      <Player name={player.name} score={player.score}/>
    {/each}
  {/if}
  <button class="mt-6 px-4 py-2 bg-blue-500 text-white" on:click={() => {players = [...players, {name: 'New Player', score: 0}]}}>Add new player</button>
</main>

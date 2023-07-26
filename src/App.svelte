<script>
  import{onMount} from 'svelte';
  import{loadLaunches} from './services/launches.js';
  //axio function to load data
  import{queryLaunches} from './graphQL/queries/launches.js';
  //details of graphQL query
  import SpaceXCard from './lib/SpaceXCard.svelte';
  //components
  let launches = [];
  let error = null;
  //set no error at begining
  let loading = true;
  //set loading is ture

  onMount(async() => {
    try {
      loading=true;
      launches=await loadLaunches(queryLaunches);
    console.log(launches);
    } catch (error) {
      error=error;
    }finally{
      loading=false;
    }
        
  });

</script>
<main>
  <h1>SpcaeX Launches</h1>

  {#if loading}
    <p>Loading...</p>
  {:else if error}
    <p>{error.message}</p>
  {:else}
  {#each launches as launch}
  
  <SpaceXCard {launch}/>

{/each}

  {/if}

  
</main>

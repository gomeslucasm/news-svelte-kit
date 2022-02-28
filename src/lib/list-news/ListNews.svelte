<script context="module">
  export const hydrate = true
</script>

<script>
  import { makeUrl } from '$lib/utils'
  import { NewsItem } from '$lib/news-item'
  import { onMount } from 'svelte'

  const url = makeUrl('news/others')

  const getNews = () => {
    fetch(url).then(async (r) => (news = await r.json()))
  }

  onMount(() => {
    getNews()
  })

  let news = []
</script>

<div class="list">
  {#each news as { title, category }}
    <div class="item">
      <NewsItem {title} {category} />
    </div>
  {/each}
</div>

<style>
  .list{
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    width: 100%;
    grid-auto-flow: column;
    grid-template-rows: 1fr 1fr;
  }
  @media (max-width: 991.98px) { 
    .list{
      margin-top: 2rem;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-template-columns: 50% 50%;
    }
   }
  @media (max-width: 768px) { 
    .list{
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-columns: 100%;
    }
    
  }
  .item{
    padding: .5rem;
  }
</style>
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
  .item{
    padding: .5rem;
  }
</style>
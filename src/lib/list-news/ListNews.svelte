<script context="module">
  export const hydrate = true
</script>

<script>
  import { makeUrl } from '$lib/utils'
  import { NewsItem } from '$lib/news-item'
  import { Loading } from '$lib/loading'
  import { onMount } from 'svelte'

  const url = makeUrl('news/others')

  const getNews = () => {
    fetch(url).then(async (r) => (news = await r.json()))
  }

  onMount(() => {
    getNews()
  })

  let news
</script>

<div class="list-container">
  {#if news}
    <div class="list">
      {#each news as { title, category, slug, id }}
        <div class="item">
          <NewsItem {title} {category} {slug} {id} />
        </div>
      {/each}
    </div>
  {:else}
    <div class="loading">
      <Loading />
      <span class="loading-text"> Carregando notícias </span>
    </div>
  {/if}
</div>

<style>
  .loading-text {
    margin: auto;
    margin-left: 5px;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
  }

  .loading {
    display: flex;
  }
  .list-container {
    margin-top: 4rem;
  }
  .list {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    width: 100%;
    grid-auto-flow: column;
    grid-template-rows: 1fr 1fr;
  }
  @media (max-width: 991.98px) {
    .list {
      margin-top: 2rem;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-template-columns: 50% 50%;
    }
  }
  @media (max-width: 768px) {
    .list {
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-columns: 100%;
    }
  }
  .item {
    padding: 0.5rem;
  }
</style>

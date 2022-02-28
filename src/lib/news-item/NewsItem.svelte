<script>
  import { makeSlug } from '$lib/utils'

  export let title
  export let category
  export let slug
  export let id
</script>

<a sveltekit:prefetch href={`/${makeSlug(id)(slug)}`}>
  <div class="news-item-container">
    <div
      class="bar"
      class:red={category === 'ECONOMIA'}
      class:green={category === 'DIVERSIDADES'}
      class:blue={category === 'EDUCAÇÃO'}
    />
    <p>
      {title}
    </p>
  </div>
</a>

<style>
  .bar {
    height: 100%;
    width: 5px;
    background-color: var(--color);
    border-radius: 100px;
  }
  .news-item-container {
    display: grid;
    grid-template-columns: 5px 1fr;
  }
  p {
    padding: 0.5rem 0px;
    padding-left: 0.7rem;
  }
</style>

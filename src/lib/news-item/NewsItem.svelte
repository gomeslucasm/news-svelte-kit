<script>
  export let title
  export let category
</script>

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
  p{
    padding: .5rem 0px ;
    padding-left: .7rem;
  }
</style>

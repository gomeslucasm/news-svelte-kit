<script>
  import { CategoryName } from '$lib/category-name'

  export let title
  export let category
  export let poster
</script>

<div class="secondary-headline-container">
  <img src={poster} alt={`Imagem da notícia: ${title}`}/>
  <CategoryName categoryName={category} />
  <p>
    {title}
  </p>
</div>

<style>
  .secondary-headline-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 1rem;
  }
  img{
    border-radius: 10px;
  }
  p {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
  }
</style>

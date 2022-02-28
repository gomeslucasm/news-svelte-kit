<script>
  import { CategoryName } from '$lib/category-name'

  export let title
  export let category
</script>

<div class="headline-container">
  <CategoryName categoryName={category} />
  <span class="headline-text">
    {title}
  </span>
</div>

<style>
  .headline-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .headline-text {
    margin-top: 1rem;
    font-weight: 700;
    font-size: 58px;
    line-height: 60px;
  }

  @media (max-width: 768px) {
    .headline-text {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
</style>

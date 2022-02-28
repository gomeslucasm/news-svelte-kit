<script>
  export let categoryName
</script>

<p
  class:red={categoryName === 'ECONOMIA'}
  class:green={categoryName === 'DIVERSIDADES'}
  class:blue={categoryName === 'EDUCAÇÃO'}
>
  {categoryName}
</p>

<style>
  p {
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    line-height: 100%;
    vertical-align: Center;
    color: var(--color);
  }
  
</style>

<script>
  import { Advertising } from '$lib/advertising'
  import { CategoryName } from '$lib/category-name'

  export let news
</script>

<a href="/" id="return-button">
  <img id="arrow" src="arrow-left.svg" alt="</div>" />
</a>

<div class="page-container">
  <div class="news-info">
    <div id="category-name-container">
      <CategoryName categoryName={news.category} />
    </div>
    <p class="title">
      {news.title}
    </p>
    <p class="subtitle">
      {news.subtitle}
    </p>
    <p class="date">
      {news.date}, Por: {news.author}
    </p>
  </div>

  <div id="advertising">
    <Advertising />
  </div>

  <div class="news-content">
    {@html news.article}
  </div>
</div>

<style>
  .news-content {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
  }
  .date {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;

    display: flex;
    align-items: center;

    color: rgba(0, 0, 0, 0.2);
  }
  .news-info {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
  #advertising {
    margin: 2rem 0px;
  }
  #return-button {
    width: 54px;
    height: 54px;
    background-color: black;
    position: absolute;
    top: 0px;
    display: flex;
    cursor: pointer;
  }
  .title {
    font-size: 58px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: left;
  }

  .subtitle {
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 32px;
  }
  #arrow {
    width: 24px;
    height: 24px;
    margin: auto;
  }

  .page-container {
    margin: 2.5rem 5rem;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 24px;
      line-height: 30px;
    }
    .subtitle {
      font-size: 12px;
      line-height: 20px;
    }

    .page-container {
      margin: 2.5rem 2rem;
    }

    .news-content {
      font-size: 12px;
      font-weight: 400;
      line-height: 22px;
      text-align: left;
    }

    #advertising {
      margin: 1rem 0px;
    }
  }
</style>

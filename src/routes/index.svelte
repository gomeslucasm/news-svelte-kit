<script context="module">
  import { makeUrl, parseHeadlines } from '$lib/utils'

  export async function load ({ fetch }) {
    const url = makeUrl('/news/headlines')

    const response = await fetch(url)

    return {
      props: {
        status: response.status,
        ...(response.ok && parseHeadlines(await response.json())),
      },
    }
  }
</script>

<script>
  import { ListNews } from '$lib/list-news'
  import { Headline } from '$lib/headline'
  import { Advertising } from '$lib/advertising'
  import { SecondaryHeadline } from '$lib/secondary-headline'

  export let headline
  export let secondaryHeadlines
</script>

<div class="page-container">
  <Advertising />

  <div id="headlines">
    <div class="principal headline">
      <Headline {...headline} />
    </div>

    {#each secondaryHeadlines as { title, poster, category }}
      <div class="headline">
        <SecondaryHeadline {title} {poster} {category} />
      </div>
    {/each}
  </div>

  <ListNews />
</div>

<style>
  .headline {
    width: 25%;
    padding: 0px 0.5rem;
  }
  .principal {
    width: 50%;
  }

  #headlines {
    display: flex;
  }
  .page-container {
    margin: 2.5rem;
  }

  @media (max-width: 991.98px) and (min-width: 768px) {
    .headline {
      width: 45%;
    }

    .principal {
      width: 100%;
    }
    #headlines {
      row-gap: 2rem;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 768px) {
    .page-container {
      margin: 1rem;
    }

    #headlines {
      display: flex;
      row-gap: 2rem;
      flex-wrap: wrap;
    }

    .headline {
      width: 100%;
    }
  }
</style>

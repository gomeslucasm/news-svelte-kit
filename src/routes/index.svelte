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
	.headline{
		width: 25%;
		padding: 0px .5rem;
	}
	.principal{
		width: 50%;
	}
  #headlines {
    display: flex;
  }
  .page-container {
    margin: 50px;
    margin-top: 32px;
    margin-bottom: 69px;
  }
</style>

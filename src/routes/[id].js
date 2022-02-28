
import { makeNewsDetailUrl } from '$lib/utils'

export async function get ({ params }) {
  const url = makeNewsDetailUrl(params)

  const response = await fetch(url)

  return {
    status: response.status,
    body: {
      news: response.ok && await response.json(),
    },
  }
}

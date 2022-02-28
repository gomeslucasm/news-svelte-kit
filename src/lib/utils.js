import { cond, split, last, pipe, head, equals, not, when, concat, tail, prop } from 'ramda'

const BASE_URL = 'https://apimock.sevn.technology'

const notHasBar = pipe(head, equals('/'), not)

const putInitialBar = when(notHasBar, concat('/'))

const makeUrl = pipe(
  putInitialBar,
  concat(BASE_URL),
)

const parseId = pipe(
  split('-'),
  last,
)

const makeNewsDetailUrl = pipe(
  prop('id'),
  parseId,
  (id) => makeUrl(`/news/articles/${id}`),
)

const notSlugId = (id) => pipe(
  parseId,
  (x) => Number(x),
  equals(id),
  not,
)

const putIdOnSlug = (id) => (slug) => `${slug}-${id}`

const makeSlug = (id) => when(notSlugId(id), putIdOnSlug(id))

const parseHeadlines = (x) => ({
  headline: head(x),
  secondaryHeadlines: tail(x),
})

export { BASE_URL, parseId, makeUrl, parseHeadlines, makeNewsDetailUrl, makeSlug }

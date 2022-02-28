import { cond, split, last, pipe, head, equals, not, when, concat, tail } from 'ramda'

const BASE_URL = 'https://apimock.sevn.technology'

const notHasBar = pipe(head, equals('/'), not)

const putInitialBar = when(notHasBar, concat('/'))

const makeUrl = pipe(
  putInitialBar,
  concat(BASE_URL),
)

const parseId = pipe(
  split('/'),
  last,
)

const parseHeadlines = (x) => ({
  headline: head(x),
  secondaryHeadlines: tail(x),
})

export { BASE_URL, parseId, makeUrl, parseHeadlines }

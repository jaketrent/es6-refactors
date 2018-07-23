import { link } from './link'

describe('#link', () => {
  it('lets plain strings pass through', () => {
    expect(link`a plain string`).toEqual('a plain string')
  })

  it('replaces an in-text single link', () => {
    expect(link`here is a https://jaketrent.com link`).toEqual(
      'here is a <a href="https://jaketrent.com">jaketrent.com</a> link'
    )
  })

  it('replaces an interpolated link', () => {
    const url = 'https://jaketrent.com'
    expect(link`here is a ${url} link`).toEqual(
      'here is a <a href="https://jaketrent.com">jaketrent.com</a> link'
    )
  })

  it('replaces in-text and an interpolated link', () => {
    const url = 'https://jaketrent.com'
    expect(
      link`before there was https://duckduckgo.com, now there is ${url}`
    ).toEqual(
      'before there was <a href="https://duckduckgo.com">duckduckgo.com</a>, now there is <a href="https://jaketrent.com">jaketrent.com</a>'
    )
  })
})

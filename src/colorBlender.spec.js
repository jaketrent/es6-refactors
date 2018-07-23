import { blend } from './colorBlender'

describe('#blend', () => {
  it('defaults to blending with white', () => {
    expect(blend(undefined, { r: 0, g: 0, b: 0 })).toEqual({
      r: 127.5,
      g: 127.5,
      b: 127.5
    })
  })

  it('blends red + blue = purple', () => {
    expect(blend({ r: 0, g: 0, b: 200 }, { r: 200, g: 0, b: 0 })).toEqual({
      r: 100,
      g: 0,
      b: 100
    })
  })

  it('blends green + orange = limerick', () => {
    expect(blend({ r: 60, g: 255, b: 58 }, { r: 228, g: 118, b: 0 })).toEqual({
      r: 144,
      g: 186.5,
      b: 29
    })
  })
})

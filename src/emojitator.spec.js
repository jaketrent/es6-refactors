import { Emojitator } from './emojitator'

jest.useFakeTimers()

const opts = {
  emoji: ['😅', '😤', '😴', '😬'],
  interval: 1000
}

describe('Emojitator', () => {
  it('shows correct emoji after 1 second', () => {
    const emojitator = new Emojitator(opts)
    emojitator.start()
    jest.advanceTimersByTime(1000)
    expect(emojitator.getActive()).toEqual('😤')
  })

  it('shows correct emoji after 2 seconds', () => {
    const emojitator = new Emojitator(opts)
    emojitator.start()
    jest.advanceTimersByTime(2000)
    expect(emojitator.getActive()).toEqual('😴')
  })

  it('shows correct emoji after 4 seconds', () => {
    const emojitator = new Emojitator(opts)
    emojitator.start()
    jest.advanceTimersByTime(4000)
    expect(emojitator.getActive()).toEqual('😅')
  })
})

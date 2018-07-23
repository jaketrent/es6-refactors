import { addAlert } from './alerts'

describe('#addAlert', () => {
  it('adds an alert message to the list', () => {
    const state = {
      otherState: 2,
      stillMore: 'toRemember',
      messages: ['Something from before']
    }
    const action = {
      type: 'ALERT',
      message: 'A problem occurred'
    }
    expect(addAlert(state, action)).toEqual({
      otherState: 2,
      stillMore: 'toRemember',
      messages: ['Something from before', 'A problem occurred']
    })
  })
})

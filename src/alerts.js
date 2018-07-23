// TODO: change to use the object spread operator (...)
// TODO: change to use the array spread operator (...)
export function addAlert(state, action) {
  state.messages.push(action.message)
  return {
    otherState: state.otherState,
    stillMore: state.stillMore,
    messages: state.messages
  }
}

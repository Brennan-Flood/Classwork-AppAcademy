import { RECEIVE_POKE } from '../actions/pokemon_actions'

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch (action.type) {
    case RECEIVE_POKE:
      // debugger
      let items = action.payload.items;
      Object.assign(nextState, state, items);
      return nextState;
    default:
      return state;
  }
}

export default itemsReducer;
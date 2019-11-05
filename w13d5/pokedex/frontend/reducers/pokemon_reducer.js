import { RECEIVE_ALL_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      Object.assign(nextState, state, action.pokemon);
      return nextState;
    case RECEIVE_POKE:
      // debugger
      let poke = action.payload.pokemon;
      Object.assign(nextState, state, { [poke.id]: poke });      
      return nextState;
      
    default:
      return state;
  }
};

export default pokemonReducer;
import fetchAllPokemon from '../util/api_util'

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => (
  fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);
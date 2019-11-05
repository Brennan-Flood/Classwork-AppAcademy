import { fetchAllPokemon, fetchPoke } from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKE = "RECEIVE_POKE";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePoke = payload => {
  // debugger
  return {
    type: RECEIVE_POKE,
    payload
  };
};

export const requestAllPokemon = () => (dispatch) => (
  fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestSinglePokemon = (pokeId) => (dispatch) => {
  // debugger
  return fetchPoke(pokeId).then(payload => {
    dispatch(receivePoke(payload))
  })
};
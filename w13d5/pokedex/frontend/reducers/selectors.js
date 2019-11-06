export const selectAllPokemon = (state)=>{
  const pokemon = Object.values(state.entities.pokemon);
  pokemon.forEach((poke, i) =>{
    poke = Object.assign({}, poke);
    pokemon[i] = poke;
  });
  return pokemon;
};

export const selectPokeItems = (state, poke) => {
  // debugger
  if (!poke || !poke.item_ids) {
    return null;
  }
  return poke ? poke.item_ids.map(id => state.entities.items[id]) : [];
};

export const selectPokemonItem = (state, itemId)=>{
  
  return state.entities.items[itemId];
};
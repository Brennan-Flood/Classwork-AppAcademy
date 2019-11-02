const selectAllPokemon = (state)=>{
  const pokemon = Object.values(state.entities.pokemon);
  pokemon.forEach((poke, i) =>{
    poke = Object.assign({}, poke);
    pokemon[i] = poke;
  });
  return pokemon;
};

export default selectAllPokemon;
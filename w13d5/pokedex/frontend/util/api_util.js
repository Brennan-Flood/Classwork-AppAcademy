export const fetchAllPokemon = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  })
};

export const fetchPoke = (id) => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`
  })
};


import React from 'react';

class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
  }
  
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render(){
    const pokeData = this.props.pokemon.map((poke) =>{
      // debugger
      return <li className="pokemon" key={poke.id}>
        <h3>{poke.name}</h3>
        <img className="pokeImage" src={poke.image_url}/>
      </li>
    });

    return <ul className="pokemonList">{pokeData}</ul>
  }
  
}

export default PokemonIndex;


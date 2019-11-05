import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { HashRouter, Route } from "react-router-dom";

class PokemonIndex extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      loading: true
    }
  }
  
  componentDidMount() {
    this.props.requestAllPokemon();//.then(() => {this.setState(loading: false)});
  }

  render(){
    let pokemon = this.props.pokemon;
    const pokemonItems = pokemon.map(poke => (
      <PokemonIndexItem key={poke.id} pokemon={poke} />
    ));

    // exit render uness requestAllPokemon has completed
    // if(pokemon.length === 0) return null;
    // if(this.state.loading) return null;
    
    return (
    <section className="pokedex-container">
        <ul className="pokemonList">{pokemonItems}</ul>
        <Route
          path="/pokemon/:pokemonId"
          component={PokemonDetailContainer}
        />
    </section>
    )
    // const pokeData = this.props.pokemon.map((poke, i) =>{
    //   // debugger
    //   return <li className="pokemon" key={poke.id}>
    //     <span> {i + 1} </span>
    //     <img className="pokeImage" src={poke.image_url}/>
    //     <h3>{poke.name}</h3>
    //   </li>
    // });

    // return <ul className="pokemonList">{pokeData}</ul>
  }
  
}

export default PokemonIndex;


import React from 'react';
import { Link } from "react-router-dom";


class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to={`/pokemon/${this.props.pokemon.id}`}>
      <li className="pokemon" key={this.props.pokemon.id}>
        
        <span>{this.props.pokemon.id}</span>      
        <img className="pokeImage" src={this.props.pokemon.image_url}/>
        <h3>{this.props.pokemon.name}</h3>
      </li>
      </Link>

    );
  }
}

export default PokemonIndexItem;
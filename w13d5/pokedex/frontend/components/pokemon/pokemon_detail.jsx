import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from "react-router-dom";
import ItemDetailContainer from '../items/item_detail_container'
class PokemonDetail extends React.Component {
  constructor(props) {
    super(props)    
  }

  componentDidMount() {
    // debugger;
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentDidUpdate(prevProps){
    // debugger
    if (this.props.match.params.pokemonId !== prevProps.match.params.pokemonId){
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
      
    }
  }

  render() {
    const poke = this.props.pokemon;
    const items = this.props.items;
    if (!items) {
      return <h1>loading</h1>
    }
    let mappedItems = items.map((item) => {
      return <li key={item.id} className="item">
        <Link to={`/pokemon/${poke.id}/items/${item.id}`}>
        <img className="itemImage" src={item.image_url}></img>
        </Link>
      </li>
    });

    let moves = poke.moves.join(", ");

    // debugger
    return (<section className="pokemonShow">
        <img className="showImage" src={poke.image_url} />
        <h1 className="showName" >{poke.name}</h1>
        <br/>
        <span className="showType" >Type: {poke.poke_type}</span>
        <br/>
        <span className="showAttack" >Attack: {poke.attack}</span>
        <br/>
        <span className="showDefense" >Defense: {poke.defense}</span>
        <br/>
        <span className="showMoves" >Moves: {moves} </span>
        <br/>
        <div className="items-container">
        
          <label className="itemsLabel">Items</label>
          <ul className="items">{mappedItems}</ul>
          <Route
            path={`/pokemon/${poke.id}/items/:itemId`}
            component={ItemDetailContainer}
          />
        </div>
      </section>)
  }
}

export default PokemonDetail;
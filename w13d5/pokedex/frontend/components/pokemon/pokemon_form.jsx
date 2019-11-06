import React from 'react';
import PokemonFormContainer from './pokemon_form_container'

class PokemonForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      image_url: "",
      poke_type: "",
      attack: "",
      defense: "",
      moves: {move_1: "", move_2: ""}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateMove = this.updateMove.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let poke = this.state;
    poke.moves = Object.values(this.state.moves);

    this.props.createPoke(poke)
      .then((data) => this.props.history.push(`/pokemon/${data.pokemon.id}`));
  }

  update(key) {
    return e => this.setState({[key]: e.target.value})
  }

  updateMove(e) {
    this.setState({
      moves: Object.assign({}, 
        this.state.moves, 
        {[e.target.id]: e.target.value} 
      )});
  }

  render() {
    return (
      <div className="pokemonShow">
        <img className="form-logo" src="./assets/pokemon-logo.svg"/>
      <form onSubmit={this.handleSubmit} className="pokemonForm">
        
        <input 
        onChange={this.update("name")} 
        type="text" 
        value={this.state.name}
        placeholder="Name"
        />
        <br/>
        <input
          onChange={this.update("image_url")}
          type="text"
          value={this.state.image_url}
          placeholder="Image Url"
        />
        <br />

        <select
          onChange={this.update("poke_type")} defaultValue="--"
        > 
          <option>Select Type</option>
          <option>bug</option>
          <option>dragon</option>
          <option>electric</option>
          <option>fighting</option>
          <option>fire</option>
          <option>fyling</option>
          <option>ghost</option>
          <option>grass</option>
          <option>ground</option>
          <option>ice</option>
          <option>normal</option>
          <option>poison</option>
          <option>psychic</option>
          <option>rock</option>
          <option>steel</option>
          <option>water</option>
      
        </select>
        <br />

        <input
          onChange={this.update("attack")}
          type="number"
          value={this.state.attack}
          placeholder="Attack"
        />
        <br />

        <input
          onChange={this.update("defense")}
          type="number"
          value={this.state.defense}
          placeholder="Defense"
        />
        <br />
        <input
          onChange={this.updateMove}
          type="text"
          id="move_1"
          value={this.state.moves.move_1}
          placeholder="Move 1"
        />
        <br />

        <input
          onChange={this.updateMove}
          id="move_2"
          type="text"
          value={this.state.moves.move_2}
          placeholder="Move 2"
        />
        <br/>
        <button className="pokemon-submit">Create Pokemon</button>
      </form>
      </div>
    )
  }
}

export default PokemonForm;
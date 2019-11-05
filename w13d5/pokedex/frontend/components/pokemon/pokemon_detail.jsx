import React from 'react'

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
    // debugger
    if (!poke) {
      return <h1>loading</h1>
    }

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
        <span className="showMoves" >Moves: {poke.moves}</span>
        
      </section>)
  }
}

export default PokemonDetail;
import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail'
import { requestSinglePokemon } from '../../actions/pokemon_actions'
import { selectPokeItems } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const pokemon = state.entities.pokemon[ownProps.match.params.pokemonId];
  // debugger
  return {
    pokemon,
    items: selectPokeItems(state, pokemon)
  }
};

const mapDispatchToProps = dispatch => {
  // debugger
  return {
    requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
  }
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PokemonDetail);
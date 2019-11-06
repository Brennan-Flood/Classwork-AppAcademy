import { connect } from 'react-redux';
import { createPoke } from '../../actions/pokemon_actions'
import PokemonForm from './pokemon_form'

const mapDispatchToProps = dispatch => {
  return {
    createPoke: pokemon => dispatch(createPoke(pokemon))
  }
};

export default connect(
  null,
  mapDispatchToProps
)(PokemonForm);
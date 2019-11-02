import { connect } from 'react-redux';
import selectAllPokemon from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';
import {requestAllPokemon} from '../../actions/pokemon_actions';

const mapStateToProps = state => ({
  // piece of state that container subscribes to
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
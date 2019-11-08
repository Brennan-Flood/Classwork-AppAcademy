import Greeting from './greeting'
import { connect } from 'react-redux';
import { receiveCurrentUser } from '../actions/session_actions'

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
  // receiveCurrentUser: dispatch(receiveCurrentUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)




// const mapStateToProps = (state, ownProps) => {
//     const pokemon = state.entities.pokemon[ownProps.match.params.pokemonId];

//     return {
//         pokemon,
//         items: selectPokeItems(state, pokemon),
//         loading: state.ui.loading.detailLoading
//     };
// };

// const mapStateToProps = state => ({
//     pokemon: selectAllPokemon(state),
//     loading: state.ui.loading.indexLoading
// });

// const mapDispatchToProps = dispatch => ({
//     requestAllPokemon: () => dispatch(requestAllPokemon())
// });

// const mapDispatchToProps = dispatch => ({
//     requestSinglePokemon: id => dispatch(requestSinglePokemon(id))
// });
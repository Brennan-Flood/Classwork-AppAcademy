import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  let user;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // return Object.assign({}, state, { [action.user.id]: action.user });
      return action.user;
    case LOGOUT_CURRENT_USER:
      return {};
    default: 
      return state;
  }
}

export default usersReducer;
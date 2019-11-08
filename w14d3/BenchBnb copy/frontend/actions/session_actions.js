import { signup, login, logout } from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

export const loginUser = user => dispatch =>  {
    return login(user).then(user => {
        dispatch(receiveCurrentUser(user))
    });
};

export const receiveCurrentUser = user => {
  return {type: RECEIVE_CURRENT_USER,
    user}
} ;

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const logoutUser = () => dispatch => {
  return logout().then(() => {
    dispatch(logoutCurrentUser())
  });
};

export const signupUser = user => dispatch => {
  return signup(user).then((user) => {
    debugger;
    dispatch(receiveCurrentUser(user))
  });
};

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => {
  return dispatch(receiveSessionErrors(errors));
};
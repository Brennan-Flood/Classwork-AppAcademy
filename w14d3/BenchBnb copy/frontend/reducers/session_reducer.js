import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const nullState = {id: null}

const sessionReducer = (state = nullState, action) => {
    Object.freeze(state);
    let user;
    
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
        
            user = action.user;
            // debugger
            return Object.assign({}, state, { id: Object.values(user)[0].id });
        case LOGOUT_CURRENT_USER:
            return Object.assign({}, state, { id: null });
        default:
          return state;
    }
}

export default sessionReducer;
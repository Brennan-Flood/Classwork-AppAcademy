import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer.js';
import { thunkMiddleware } from '../middleware/thunk';


const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunkMiddleware));
};

export default configureStore; 

import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer.js';

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore; 

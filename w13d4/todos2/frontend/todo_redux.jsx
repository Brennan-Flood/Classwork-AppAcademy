import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import Root from './components/root.jsx';
import { allTodos } from './reducers/selectors';
import { fetchTodos } from './util/todo_api_util.js';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  window.fetchTodos = fetchTodos; 
  // window.receiveTodo = receiveTodo;
  // window.receiveTodos = receiveTodos;
  // window.allTodos = allTodos; 
  ReactDOM.render(<Root store={store} />, document.getElementById('content'));
}); 
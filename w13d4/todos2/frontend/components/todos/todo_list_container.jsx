import React from 'react';
import TodoList from './todo_list';
import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo } from '../../actions/todo_actions'

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
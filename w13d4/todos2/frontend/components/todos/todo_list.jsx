import React from 'react';
import TodoListItem from './todo_list_item.jsx'
import TodoForm from './todo_form.jsx'

export default class TodoList extends React.Component {
  // return allTodos.forEach(todo => {
  //   let ListItem = todo;
  render() {
    const {todos} = this.props;
    let todoItems = todos.map((todo, i) => {
      // return <li key={i}>{todo.title}</li>
      //let item = new TodoListItem(this.props, todo, i);
      let item = new TodoListItem(todo);
      return item.render();
    });
    return (
      <div>
        <ul>
          { todoItems }
        </ul>
        
        <TodoForm receiveTodo={ this.props.receiveTodo }/>
      </div>
    )
  }
  
}

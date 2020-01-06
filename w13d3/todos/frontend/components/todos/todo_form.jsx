import React from 'react';
import { uniqueId } from '../../util/util.js';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueId(),
      title: "",
      body: "",
      done: false
    };
    this.updateTodo = this.updateTodo.bind(this);
  }

  update(prop) {
    return (event) => {
     this.setState({[prop]: event.currentTarget.value})}
  } 

  updateTodo(event) {
    // this.setState({
    //   title: event.currentTarget.title, 
    //   body: event.currentTarget.body, 
    //   done: event.currentTarget.done
    // })
    event.preventDefault();
    let newTodo = this.state;
    // console.log(this.state);
    this.props.receiveTodo(newTodo);
    this.setState({
      id: uniqueId(),
      title: '',
      body: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.updateTodo}>
      <label>Title:
      <input type="text" onChange={this.update('title')} value={this.state.title}/>
      </label>
      <br/>
      <label>Body:
      <input type="text" onChange={this.update('body')} value={this.state.body}/>
      </label>
      <br/>
      <button>Submit</button>
    </form>
    )
  }

}

// id, title, body, done
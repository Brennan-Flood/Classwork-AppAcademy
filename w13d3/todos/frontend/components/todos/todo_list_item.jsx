import React from 'react';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.title = this.props.title; 
    this.key = this.props.id; 
  }

  render() {
    return (<li key={this.key}> {this.title} </li>)
  }
}
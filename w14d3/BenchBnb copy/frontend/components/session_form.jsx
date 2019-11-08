import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger;
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(e) {
    this.setState({[e.target.id]: e.target.value})
  }

  render() {
    let submitType;

    if (this.props.formType === 'signup') {
      submitType = 'Sign Up!'
    } else (
      submitType = 'Sign In!'
    )
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username: 
        <input id='username' onChange={this.update} type="text" value={this.state.username}/>
        </label>
        <label>Password:
        <input id='password' onChange={this.update} type="password" value={this.state.password} />
        </label>
        <button>{submitType}</button>
      </form>
    )
  }
}

export default SessionForm;
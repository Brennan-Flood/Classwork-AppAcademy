import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let user = this.props.user
    if (user) {
    return (
    <h1>Hello {user.username}</h1>
    );
    } else {
      return (
        <div>
        <Link to='/signup'>
        <button>Login</button>
        </Link>
        <Link to='/login'>
        <button>Sign Up</button>
        </Link>
        </div>
      )
    }
  }

}

export default Greeting;
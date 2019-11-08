import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to='/login'>
        <button>Login</button>
        </Link>
          <Link to='/signup'>
        <button>Sign Up</button>
        </Link>
        </div>
      )
    }
  }

}

export default Greeting;
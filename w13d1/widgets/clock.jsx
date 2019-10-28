import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let seconds = this.state.time.getSeconds();
    let minutes = this.state.time.getMinutes();
    let hours = this.state.time.getHours();
    seconds = (seconds < 10 ? `0${seconds}` : seconds)
    minutes = (minutes < 10 ? `0${minutes}` : minutes)
    hours = (hours < 10 ? `0${hours%12}` : hours%12)

    return (
      <div className='time'>
        <h1>Clock</h1>
        <h4>Time: {hours}:{minutes}:{seconds} </h4>
        <h5>Date: {this.state.time.toDateString()} </h5>
      </div>

    );
  }
}

export default Clock;

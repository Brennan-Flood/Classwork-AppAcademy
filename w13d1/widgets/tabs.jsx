import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
    };

  }

  render() {
    return (
      <ul className="tabs"> 
        <h5>Musha no Tab(b)i(es)</h5>

      </ul>
    )
  }
}


export default Tabs;
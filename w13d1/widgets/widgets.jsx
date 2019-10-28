import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';

const tabsComponents = [{
title: 'tab 1', content: 'this is some content boi'
}, {
title: 'tab 2', content: 'this is some other content'
}]

function Root() {
  return (
    <div>
      <Clock/>
      <Tabs tabs={tabsComponents}/>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root/>, document.getElementById('root'));
});

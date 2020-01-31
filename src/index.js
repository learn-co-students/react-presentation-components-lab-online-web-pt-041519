import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

change = (e) => console.log(e.target)

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={this.change} />
  </div>,
  document.getElementById('root')
);
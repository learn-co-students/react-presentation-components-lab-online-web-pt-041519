import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const handleColor = e => {
  let colorString = "#" + Math.floor(Math.random() * 16777215).toString(16)
  e.target.style.color = colorString
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={handleColor} />
  </div>,
  document.getElementById('root')
);
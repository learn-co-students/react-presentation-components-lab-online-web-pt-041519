import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function handleColorChange(e) {
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16)
  e.target.style.color = color
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={handleColorChange} />
  </div>,
  document.getElementById('root')
);
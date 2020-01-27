// Code SimplerComponent Here
import React from 'react'

// const SimplerComponent = "I am just happy."
 
// const TextField = (props) =>
//   <input
//     className="field field-light"
//     onChange={props.onChange}
//     limit={props.limit || defaultLimit}
//   />;

const SimplerComponent = (props) => <div onClick={props.handleClick}>I am just happy.</div>


export default SimplerComponent
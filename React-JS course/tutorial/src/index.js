import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return <h4>Hello world</h4>;
}

// const Greeting = () => {
//   return React.createElement('h1', {}, 'Hello world');
// }

ReactDOM.render(<Greeting />, document.getElementById("root"));

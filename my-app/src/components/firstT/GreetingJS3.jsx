// Ilya Zeldner
// 3 example of react
// This is a simple React component that displays a greeting message 
// with a name passed as a prop.
// It demonstrates how to pass props and render them in a class component.
// It is a simple example of how to use class components in React.
import React from 'react';

class GreetingJS2 extends React.Component {
  render() {
    return (
      <p>
        Greeting {this.props.name} !!!
        <br />
        This is a simple greeting component written in JavaScript.
        <br />
        It demonstrates how to pass props and render them 
        in a class component.
        <br />;
      </p>
    )
  }
}
export default GreetingJS2
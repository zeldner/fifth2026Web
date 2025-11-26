// Ilya Zeldner
// 2 example of react
// This is a simple React component that display greeting message with a name passed
//  as a prop.
// It demonstrates how to pass props and render them in a "functional component".
import React from 'react'

function GreetingJS({name}) {
  return (
    <p>
      Greeting {name} !!!
      <br />
      This is a simple greeting component written in JavaScript.
      <br />
      It demonstrates how to pass props and render them 
      in a "functional component".
      <br />;
    </p>
  )
}

export default GreetingJS

// App.jsx
import React from 'react';
import HelloWorldJS from './components/firstT/HelloWorldJS1';
import GreetingJS from './components/firstT/GreetingJS2';
import GreetingJS2 from './components/firstT/GreetingJS3';
import UserList from './components/firstT/UserList4';
import ButtonContainer from './components/firstT/ButtonContainer5';
import ItemListContainer from './components/firstT/ItemListContainer6';
import FormExample from './components/firstT/FormExample7';
import VisibilityController from './components/firstT/VisibilityController8';
import AlertContainer from './components/firstT/AlertContainer9';
import DynamicMenu from './components/firstT/DynamicMenu10';
import './App.css';

function   App() {
    
    // Sample data for the user list
    // This is an array of user objects, each containing name, age, and occupation properties.
    // This data can be passed to the UserList component as props.
    // The UserList : component will then render a list of ProfileCard components for each user.
    // Each ProfileCard component will display the user's name, age, and occupation.
    

    // Sample data for the user list
    // This is an array of user objects, 
    // each containing name, age, and occupation properties.
    const usersData = [
             { name: 'John Doe', age: 30, occupation: 'Software Engineer' },
             { name: 'Jane Smith', age: 25, occupation: 'Designer' },
             { name: 'Alice Johnson', age: 28, occupation: 'Product Manager' },
  ];
    // Sample data for the dynamic menu
    // This is an array of menu items, 
    // each containing id, label, and path properties.
    const menuItems = [
            { id: 1, label: 'Home', path: '/' },
            { id: 2, label: 'About', path: '/about' },
            { id: 3, label: 'Services', path: '/services' },
            { id: 4, label: 'Contact', path: '/contact' },
          ];

  return (
    <div className="App">
      <h1>Hello World</h1>
        <HelloWorldJS />
        <GreetingJS name="John Doe" />
        <GreetingJS2 name="Jane Smith" />
        <UserList users={usersData} /> {/* Pass the array of user objects */}
        <ButtonContainer />
        <div className="content">
            <h2>Content Area</h2>
            <p>This is the main content area.</p>
            <ItemListContainer/> {/* This component can be used to display a list of items or products */}
            <p>Form : .</p>
            <FormExample /> {/* This component can be used to display a form for user input */}         
        </div>
        <div className="footer">
          <p>Footer content goes here</p>
            <VisibilityController /> {/* This component can be used to control the visibility of certain elements */}   
            <p>Alert : .</p>
            <AlertContainer /> {/* This component can be used to display alerts or notifications */}    
            <p>Dynamic Menu : .</p> 
            <DynamicMenu items={menuItems} /> {/* This component can be used to display a dynamic menu based on the provided items */}
        </div>
    </div>
  );
}
export default App;
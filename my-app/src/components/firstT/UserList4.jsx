// Ilya Zeldner
// 4 example of react
// class component that renders a user profile card using props 
// to display user information.
// It demonstrates how to use props to pass data to child components 
// and create reusable components in React.
// It is a simple example of how to create a list of components in React.

import ProfileCard from './ProfileCard4'; // Import the ProfileCard component
import React, { Component } from 'react';

// Example usage of the UserList component
// const users = [
//     { name: 'John Doe', age: 30, occupation: 'Software Engineer' },
//     { name: 'Jane Smith', age: 25, occupation: 'Designer' },
//     { name: 'Alice Johnson', age: 28, occupation: 'Product Manager' },
// ];
// <UserList users={users} />
// This component renders a list of user profiles using the ProfileCard 
// component.

class UserList extends Component {
    render() {
        const { users } = this.props; // Receive users from parent component

        return (
            <div>
                {users.map((user, index) => (
                    <ProfileCard key={index} name={user.name} age={user.age} occupation={user.occupation} />
                ))}
            </div>
        );
    }
}

export default UserList;
// Ilya Zeldner
// 12 example of react
// This component demonstrates "Conditional Rendering".
// It renders different UI elements depending on the "isOnline" prop.
import React from 'react';

function UserStatus({ username, isOnline }) {
  const containerStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    display: 'inline-block'
  };

  return (
    <div style={containerStyle}>
      <strong>{username}</strong> is currently: 
      
      {/* Ternary Operator: (Condition) ? (If True) : (If False) */}
      <span style={{ color: isOnline ? 'green' : 'red', fontWeight: 'bold' }}>
        { isOnline ? ' ONLINE' : ' OFFLINE' }
      </span>
      
      {/* Logical AND: Only shows if isOnline is true */}
      { isOnline && <span> (Available to chat)</span> }
    </div>
  );
}

export default UserStatus;
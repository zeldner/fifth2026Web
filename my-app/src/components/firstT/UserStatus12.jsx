// Ilya Zeldner
// 12 example of react
// This component demonstrates "Conditional Rendering".
// It renders different UI elements depending on the "isOnline" prop.
import React from 'react';

function UserStatus({ username, isOnline }) {
  return (
    <div className="p-3 border border-gray-300 rounded inline-block bg-gray-50 m-2">
      <strong className="text-gray-900">{username}</strong> is currently: 
      <span className={`font-bold ml-1 ${isOnline ? 'text-green-600' : 'text-red-600'}`}>
        { isOnline ? ' ONLINE' : ' OFFLINE' }
      </span>
      { isOnline && <span className="text-sm text-gray-500 ml-2">(Available to chat)</span> }
    </div>
  );
}
export default UserStatus;
// Ilya Zeldner
// 10 example of react
// This component demonstrates how to create a dynamic menu using props.
// It takes an array of items as props and renders a navigation menu
// with links.

import React from 'react';

function DynamicMenu({ items }) {
  return (
    <nav className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <ul className="flex space-x-6 justify-center">
        {items.map((item) => (
          <li key={item.id}>
            <a 
                href={item.path}
                className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
                {item.label}
            </a>  
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DynamicMenu;
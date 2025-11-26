// Ilya Zeldner
// 10 example of react
// This component demonstrates how to create a dynamic menu using props.
// It takes an array of items as props and renders a navigation menu 
// with links.
import React from 'react';

function DynamicMenu({ items }) {
  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href={item.path}>{item.label}</a>  
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DynamicMenu;
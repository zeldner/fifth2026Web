// Ilya Zeldner
// 11 example of react
// This component demonstrates the "children" prop.
// It acts as a wrapper (container) for any content you put inside it.

import React from 'react';

function CardWrapper({ title, children }) {
  return (
    <div className="border border-gray-300 rounded-lg p-5 m-3 shadow-md bg-white">
      <h3 className="border-b-2 border-gray-700 pb-2 mb-4 text-xl font-semibold text-gray-800">
        {title}
      </h3>
      <div className="text-gray-600">
        {children}
      </div>
    </div>
  );
}
export default CardWrapper;
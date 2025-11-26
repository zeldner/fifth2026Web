// Ilya Zeldner
// 14 example of react
// This component demonstrates passing an OBJECT as a prop
// and using Default Props (in case data is missing).
import React from 'react';

function ProductCard({ product }) {
    if (!product) // Handle missing product prop gracefully
        return <div className="text-red-500">No data</div>;

  return (
    <div className="border border-blue-200 p-6 rounded-xl hover:bg-blue-50 transition-colors shadow-sm bg-white m-3 w-64">
      <h4 className="text-xl font-bold text-blue-800 mb-2">{product.name}</h4>
      <p className="text-gray-700 font-medium text-lg">
        Price: <span className="text-green-600 font-bold">${product.price}</span>
      </p>
      <div className="mt-4 pt-4 border-t border-gray-100">
         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {product.category || 'General'} { /* Use default if category is missing */ }
         </span>
      </div>
    </div>
  );
}

export default ProductCard;
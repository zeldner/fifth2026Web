// Ilya Zeldner
// 14 example of react
// This component demonstrates passing an OBJECT as a prop
// and using Default Props (in case data is missing).
import React from 'react';

// We expect a "product" object prop
function ProductCard({ product }) {
  
  // Safety check: if product is undefined, don't crash
  if (!product) {
    return <div>No product data available</div>;
  }

  return (
    <div style={{ border: '1px solid blue', padding: '10px' }}>
      <h4>{product.name}</h4>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category || 'General'}</p> {/* Fallback text */}
    </div>
  );
}

export default ProductCard;
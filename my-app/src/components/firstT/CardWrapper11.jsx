// Ilya Zeldner
// 11 example of react
// This component demonstrates the "children" prop.
// It acts as a wrapper (container) for any content you put inside it.
import React from 'react';

function CardWrapper({ title, children }) {
  // Styles to look like a "Card"
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ borderBottom: '2px solid #333' }}>{title}</h3>
      
      {/* {children} renders whatever HTML/Components 
          are placed *inside* <CardWrapper> tags */}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default CardWrapper;
// Ilya Zeldner
// 13 example of react
// This component demonstrates "Fragments" (<>...</>).
// React components must return a SINGLE parent element.
// Fragments allow us to group elements without adding an extra <div> to the DOM.
import React from 'react';

function ArticleLayout({ title, content }) {
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
      
      <main>
        <p>{content}</p>
      </main>
      
      <footer>
        <small>Copyright Ilya Zeldner Braude 2025</small>
      </footer>
    </>
  );
}

export default ArticleLayout;
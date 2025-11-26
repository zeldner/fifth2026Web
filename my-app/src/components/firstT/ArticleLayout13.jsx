// Ilya Zeldner
// 13 example of react
// This component demonstrates "Fragments" (<>...</>).
// React components must return a SINGLE parent element.
// Fragments allow us to group elements without adding an extra <div> to the DOM.
import React from 'react';

function ArticleLayout({ title, content }) {
  return (
    <>
      <header className="bg-blue-50 p-6 mb-4 rounded-t-lg border-b border-blue-100">
        <h1 className="text-3xl font-bold text-blue-900">{title}</h1>
      </header>
      
      <main className="p-6 text-gray-700 leading-relaxed text-lg">
        <p>{content}</p>
      </main>
      
      <footer className="p-4 border-t border-gray-200 mt-4 text-center text-sm text-gray-500">
        <small>Copyright 2025</small>
      </footer>
    </>
  );
}
export default ArticleLayout;
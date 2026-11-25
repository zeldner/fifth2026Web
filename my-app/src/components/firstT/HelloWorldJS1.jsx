// Ilya Zeldner - Web Technologies Practice 5 (Example 1: Your First React Component)
//
// HOW IT WORKS:
//   - A React component is a plain JavaScript function whose name starts with a CAPITAL letter.
//   - It returns JSX (HTML-like syntax that Vite/SWC compiles into React element calls).
//   - Notice we no longer need `import React from 'react'` in modern React (17/18/19).
//
// PROS:
//   - Simple, declarative UI building block that can be reused anywhere via `<HelloWorldJS />`.
//
// CONS & COMMON PITFALLS:
//   - PITFALL #1: Naming a component lowercase (`helloWorldJS`) makes React treat it as an HTML tag.
//   - PITFALL #2: Putting a semicolon after `<h1>...</h1>;` inside JSX renders a literal `;` on screen!

export default function HelloWorldJS() {
  return (
    <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-900">
      <h2 className="text-xl font-bold">Hello World from React 19!</h2>
      <p className="text-sm text-blue-700 mt-1">
        Rendered by a clean functional component with zero boilerplate.
      </p>
    </div>
  );
}

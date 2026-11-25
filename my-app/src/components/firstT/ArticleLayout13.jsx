// Ilya Zeldner - Web Technologies Practice 5 (Example 13: React Fragments <>...</>)
//
// HOW IT WORKS:
//   - A React component must return a SINGLE root node.
//   - Fragments (`<>...</>`) group sibling elements (`<header>`, `<main>`, `<footer>`) without
//     polluting the DOM with an unnecessary wrapper `<div>`.
//
// PROS:
//   - Keeps HTML semantics clean and avoids breaking CSS Flexbox/Grid parent-child layouts.
//
// CONS & COMMON PITFALLS:
//   - PITFALL: Shorthand `<>...</>` cannot accept a `key` attribute! When returning multiple
//     elements inside `.map()`, import `{ Fragment }` from `'react'` and use `<Fragment key={id}>`.

export default function ArticleLayout({ title, author = 'Web Engineering Course', content }) {
  return (
    <>
      <header className="bg-blue-50 p-4 rounded-t-xl border border-blue-100">
        <h3 className="text-lg font-bold text-blue-950">{title}</h3>
        <p className="text-xs text-blue-700 mt-0.5">By {author}</p>
      </header>

      <div className="p-4 bg-white border-x border-slate-200 text-slate-700 text-sm leading-relaxed">
        <p>{content}</p>
      </div>

      <footer className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-b-xl text-xs text-slate-500">
        Rendered with React Fragments (zero extra wrapper &lt;div&gt; in DOM)
      </footer>
    </>
  );
}

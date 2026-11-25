// Ilya Zeldner - Web Technologies Practice 5 (Example 13: React Fragments <>...</>)
//
// HOW IT WORKS:
//   - Groups sibling elements (`<header>`, `<div>`, `<footer>`) without adding an extra `<div>` to the DOM.
//
// CONS & COMMON PITFALLS:
//   - PITFALL: Shorthand `<>...</>` cannot take a `key` prop — inside `.map()`, import `{ Fragment }`
//     from `'react'` and write `<Fragment key={id}>...</Fragment>`.

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

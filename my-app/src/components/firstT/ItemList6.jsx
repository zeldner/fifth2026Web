// Ilya Zeldner - Web Technologies Practice 5 (Example 6B: Semantic List Component)
//
// HOW IT WORKS:
//   - Renders a heading `<h4>` outside `<ul>`, and maps `items` into `<li>` children inside `<ul>`.
//
// CONS & COMMON PITFALLS:
//   - PITFALL FIXED: Never place an `<h4>` directly inside a `<ul>` — HTML5 allows only `<li>`
//     elements as direct children of `<ul>` or `<ol>`.

export default function ItemList({ title = 'Item List', items = [] }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-xs border border-slate-200">
      <h4 className="text-base font-bold mb-2 text-slate-800">{title}</h4>
      {items.length === 0 ? (
        <p className="text-sm text-slate-500">No items in list.</p>
      ) : (
        <ul className="list-disc list-inside space-y-1">
          {items.map((item) => (
            <li key={item} className="text-sm text-slate-700 hover:text-blue-600 transition-colors">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

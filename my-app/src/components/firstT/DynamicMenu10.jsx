// Ilya Zeldner - Web Technologies Practice 5 (Example 10: Data-Driven Navigation Menu)
//
// HOW IT WORKS:
//   - Maps an `items` array (`[{ id, label, path }]`) into links and highlights `activePath`.
//   - Marks the active link with `aria-current="page"` for screen-reader accessibility.

export default function DynamicMenu({ items = [], activePath = '/' }) {
  return (
    <nav aria-label="Example Navigation" className="bg-slate-900 p-3 rounded-xl shadow-xs">
      <ul className="flex flex-wrap gap-2 justify-center">
        {items.map((item) => {
          const isActive = item.path === activePath;
          return (
            <li key={item.id}>
              <a
                href={item.path}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => e.preventDefault()}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors inline-block ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

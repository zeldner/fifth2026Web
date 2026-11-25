// Ilya Zeldner - Web Technologies Practice 5 (Example 14: Object Props, Guard Clauses & Fallbacks)
//
// HOW IT WORKS:
//   - Accepts a structured `product` object prop (`{ name, price, category, inStock }`).
//   - Uses an early guard clause (`if (!product) return ...`) to prevent `TypeError: Cannot read properties of undefined`.
//   - Destructures fields with default values (`category = 'General'`, `inStock = true`).
//
// PROS:
//   - Defensive component design: handles missing objects or optional properties gracefully.
//
// CONS & COMMON PITFALLS:
//   - PITFALL: Never mutate `product.price = 0` inside the component — treat all object props as read-only!

export default function ProductCard({ product }) {
  if (!product) {
    return (
      <div className="border border-rose-200 bg-rose-50 text-rose-700 p-4 rounded-xl text-sm font-medium w-64">
        No product data provided (Guard Clause Fallback)
      </div>
    );
  }

  const { name, price, category = 'General', inStock = true } = product;

  return (
    <div className="border border-slate-200 p-5 rounded-xl hover:border-blue-400 transition-colors shadow-xs bg-white w-64">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h4 className="text-base font-bold text-slate-900">{name}</h4>
        <span
          className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
            inStock ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'
          }`}
        >
          {inStock ? 'In Stock' : 'Sold Out'}
        </span>
      </div>

      <p className="text-slate-700 text-sm">
        Price: <span className="text-emerald-700 font-bold text-base">${Number(price).toFixed(2)}</span>
      </p>

      <div className="mt-3 pt-3 border-t border-slate-100">
        <span className="inline-block bg-slate-100 rounded-full px-3 py-1 text-xs font-semibold text-slate-700">
          {category}
        </span>
      </div>
    </div>
  );
}

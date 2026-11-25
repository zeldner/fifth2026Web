// Ilya Zeldner - Web Technologies Practice 5 (Example 9B: Dynamic Styling Lookup Dictionary)
//
// HOW IT WORKS:
//   - Maps `type` (`success`, `warning`, `error`, `info`) to complete Tailwind class strings.
//
// CONS & COMMON PITFALLS:
//   - TAILWIND V4 RULE: Never interpolate class names like `bg-${color}-50` — Tailwind's static
//     build scanner requires complete class strings in source code so styles are not purged.

export default function Alert({ type = 'info', message }) {
  const alertStyles = {
    success: 'bg-emerald-50 border-emerald-500 text-emerald-900',
    warning: 'bg-amber-50 border-amber-500 text-amber-900',
    error: 'bg-rose-50 border-rose-500 text-rose-900',
    info: 'bg-blue-50 border-blue-500 text-blue-900',
  };

  const activeClass = alertStyles[type] || alertStyles.info;

  return (
    <div role="alert" className={`border-l-4 p-3.5 rounded-r-lg ${activeClass} flex items-center text-sm shadow-xs`}>
      <span className="font-bold mr-2 uppercase text-xs tracking-wider">{type}:</span>
      <span>{message}</span>
    </div>
  );
}

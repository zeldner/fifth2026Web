// Ilya Zeldner - Web Technologies Practice 5 (Example 9A: Dynamic Styling Lookup Map)
//
// HOW IT WORKS:
//   - Maps `type` (`'success'`, `'warning'`, `'error'`, `'info'`) to complete Tailwind CSS class strings.
//   - Uses `role="alert"` so screen readers announce important notifications immediately.
//
// PROS:
//   - Clean, extensible lookup dictionary instead of messy nested `if / else` chains.
//
// CONS & COMMON PITFALLS:
//   - TAILWIND V4 RULE: Never construct dynamic class names with string interpolation like
//     `bg-${color}-100`! Tailwind's build scanner looks for complete class strings in source files
//     and will purge dynamically concatenated classes. Always map full class names as shown below.

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

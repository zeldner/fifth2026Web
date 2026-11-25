// Ilya Zeldner - Web Technologies Practice 5 (Example 7B: Accessible Reusable Form Field)
//
// HOW IT WORKS:
//   - Connects `<label htmlFor={inputId}>` to `<input id={inputId} />` and spreads `{...rest}`.
//
// CONS & COMMON PITFALLS:
//   - PITFALL: In JSX, use `htmlFor` instead of HTML's `for` (because `for` is a reserved JS keyword).

export default function LabeledInput({ label, type = 'text', id, ...rest }) {
  const inputId = id || `field-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="mb-3">
      <label
        htmlFor={inputId}
        className="block text-slate-700 text-xs font-bold uppercase tracking-wide mb-1"
      >
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        placeholder={`Enter ${label.toLowerCase()}...`}
        className="w-full py-2 px-3 border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        {...rest}
      />
    </div>
  );
}

// Ilya Zeldner - Web Technologies Practice 5 (Example 5B: Reusable Button with Callback & ...rest)
//
// HOW IT WORKS:
//   - Receives visual props (`text`, `variant`) and a function prop (`onClick`).
//   - Forwards `{...rest}` (`disabled`, `aria-label`, etc.) directly to the native `<button>`.
//
// PROS:
//   - Parent decides *what happens* on click; child decides *how the button looks*.
//
// CONS & COMMON PITFALLS:
//   - PITFALL: Pass a function reference `onClick={fn}`, NOT `onClick={fn()}` (which executes during render).

export default function ActionButton({
  text,
  variant = 'primary',
  onClick,
  type = 'button',
  ...rest
}) {
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    success: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    danger: 'bg-rose-600 hover:bg-rose-700 text-white',
  };

  const activeStyle = variantClasses[variant] || variantClasses.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-semibold text-sm shadow-xs transition-colors cursor-pointer disabled:opacity-50 ${activeStyle}`}
      {...rest}
    >
      {text}
    </button>
  );
}

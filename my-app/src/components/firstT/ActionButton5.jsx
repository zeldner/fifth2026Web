// Ilya Zeldner - Web Technologies Practice 5 (Example 5A: Callback Props & Prop Spreading)
//
// HOW IT WORKS:
//   - Receives visual props (`text`, `variant`) and a function prop (`onClick`).
//   - Spreads `{...rest}` onto the native `<button>` so standard attributes (`disabled`, `type`,
//     `aria-label`) work automatically without manually listing every HTML attribute.
//
// PROS:
//   - Reusable design-system button with consistent Tailwind variants (`primary`, `success`, `danger`).
//   - Parent controls *what happens* on click; child controls *how the button looks*.
//
// CONS & COMMON PITFALLS:
//   - PITFALL: Pass `onClick={handleClick}` (function reference), NOT `onClick={handleClick()}`
//     (which calls the function immediately during render!).

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
      className={`px-4 py-2 rounded-lg font-semibold text-sm shadow-sm transition-colors cursor-pointer disabled:opacity-50 ${activeStyle}`}
      {...rest}
    >
      {text}
    </button>
  );
}

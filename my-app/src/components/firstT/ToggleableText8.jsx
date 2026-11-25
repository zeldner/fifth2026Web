// Ilya Zeldner - Web Technologies Practice 5 (Example 8B: Conditional Rendering with &&)
//
// HOW IT WORKS:
//   - Renders `<p>{text}</p>` only when `Boolean(isVisible)` evaluates to `true`.
//
// CONS & COMMON PITFALLS:
//   - FAMOUS REACT PITFALL: Never write `{items.length && <List />}`! When `items.length === 0`,
//     React renders the number `0` visibly on screen. Always convert to boolean (`Boolean(...)` or `> 0`).

export default function ToggleableText({ text, isVisible = false }) {
  return (
    <div className="min-h-6">
      {Boolean(isVisible) && (
        <p className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-sm font-medium">
          {text}
        </p>
      )}
    </div>
  );
}

// Ilya Zeldner - Web Technologies Practice 5 (Example 8A: Conditional Rendering with &&)
//
// HOW IT WORKS:
//   - Uses short-circuit logical AND (`isVisible && <p>...</p>`) to render JSX only when `isVisible` is true.
//
// PROS:
//   - Concise, idiomatic React syntax for showing/hiding optional UI elements.
//
// CONS & COMMON PITFALLS:
//   - FAMOUS REACT PITFALL: Never write `{items.length && <List />}`! If `items.length` is `0`,
//     JavaScript short-circuits and renders the number `0` visibly on the screen!
//     Always use a boolean (`Boolean(isVisible)` or `items.length > 0`).

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

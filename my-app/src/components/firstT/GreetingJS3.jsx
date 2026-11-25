// Ilya Zeldner - Web Technologies Practice 5 (Example 3: Default Prop Values & JS Expressions)
//
// HOW IT WORKS:
//   - Assigns ES6 default values directly in the function signature (`name = 'Guest'`).
//   - Any JavaScript expression (math, ternary, template literals, methods) can run inside `{ ... }`.
//
// PROS:
//   - Replaces legacy `Component.defaultProps` (which was removed for function components in React 19)
//     and legacy Class Components (`class Greeting extends React.Component`).
//   - Prevents `"Hello, undefined!"` when an optional prop is omitted.
//
// CONS & COMMON PITFALLS:
//   - PITFALL: Only JavaScript *expressions* (values) work inside `{}` — statements like `if` or `for`
//     are not valid inside JSX curly braces.

export default function GreetingJS2({ name = 'Guest', coursesCount = 0 }) {
  return (
    <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950">
      <p className="text-lg font-semibold">
        Hello, {name.toUpperCase()}!
      </p>
      <p className="text-sm text-emerald-800 mt-1">
        Enrolled courses: <strong>{coursesCount}</strong>{' '}
        ({coursesCount > 0 ? 'Active Semester' : 'No Courses Yet'})
      </p>
    </div>
  );
}

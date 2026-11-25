// Ilya Zeldner - Web Technologies Practice 5 (Example 3: Default Prop Values & JS Expressions)
//
// HOW IT WORKS:
//   - Uses ES6 default parameters (`name = 'Guest'`, `coursesCount = 0`) right in the signature.
//   - Embeds JavaScript expressions (methods, math, ternary operators) inside `{ ... }`.
//
// PROS:
//   - Replaces legacy Class Components (`extends React.Component`) and deprecated `defaultProps`.
//   - Prevents `"Hello, undefined!"` when an optional prop is omitted by the parent.
//
// CONS & COMMON PITFALLS:
//   - PITFALL: Only JS *expressions* (values) work inside `{}` — statements (`if`, `for`) are invalid.

export default function GreetingJS3({ name = 'Guest', coursesCount = 0 }) {
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

// Ilya Zeldner - Web Technologies Practice 5 (Example 2: Basic Props & Destructuring)
//
// HOW IT WORKS:
//   - Parent components pass data down via attributes: `<GreetingJS name="John Doe" role="Developer" />`.
//   - React bundles those attributes into a single `props` object and passes it to this function.
//   - We destructure `{ name, role }` directly in the parameter list for clean, readable code.
//
// PROS:
//   - Makes a single component reusable with different inputs.
//   - Data flows strictly one way: Parent -> Child (Unidirectional Data Flow).
//
// CONS & COMMON PITFALLS:
//   - PITFALL: Props are READ-ONLY (immutable). Never write `props.name = 'Other'` inside a child!

export default function GreetingJS({ name, role }) {
  return (
    <div className="p-4 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-950">
      <p className="text-lg font-semibold">
        Welcome, <span className="text-indigo-700">{name}</span>!
      </p>
      <p className="text-sm text-indigo-700 mt-1">
        Role passed via props: <strong>{role}</strong>
      </p>
    </div>
  );
}

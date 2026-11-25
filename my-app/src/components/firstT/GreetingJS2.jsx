// Ilya Zeldner - Web Technologies Practice 5 (Example 2: Basic Props & Destructuring)
//
// HOW IT WORKS:
//   - Parent components pass data down via attributes: `<GreetingJS name="John Doe" role="Developer" />`.
//   - React bundles attributes into a `props` object and passes it to the function.
//   - Destructuring `{ name, role }` in the signature avoids repetitive `props.` prefixes.
//
// PROS:
//   - Makes one component reusable with different inputs.
//   - Enforces Unidirectional Data Flow (Parent -> Child).
//
// CONS & COMMON PITFALLS:
//   - PITFALL: Props are strictly READ-ONLY (immutable). Never reassign `name = '...'` inside the child.

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

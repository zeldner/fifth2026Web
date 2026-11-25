// Ilya Zeldner - Web Technologies Practice 5 (Example 15: Component Purity & Props Immutability)
//
// HOW IT WORKS:
//   - Clones the incoming `courses` array (`[...courses]`) BEFORE calling `.sort()`.
//   - Leaves the parent's original array completely untouched.
//
// PROS:
//   - Keeps the component a Pure Function: same props -> same JSX output, zero side effects.
//   - Passes React's `<StrictMode>` double-render check cleanly.
//
// CONS & COMMON PITFALLS:
//   - CRITICAL REACT RULE: Never call `courses.sort()`, `courses.push()`, or `courses.reverse()`
//     directly on an array prop! Those methods mutate the parent's original array in place.

export default function SortedCourseList({
  title = 'Sorted Course Catalog (Immutable Clone)',
  courses = [],
}) {
  // Always clone with [...courses] before sorting so we never mutate the parent's prop array!
  const sortedCourses = [...courses].sort((a, b) => a.code.localeCompare(b.code));

  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-base font-bold text-slate-900">{title}</h4>
        <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
          [...courses].sort()
        </span>
      </div>
      <ul className="divide-y divide-slate-100">
        {sortedCourses.map((course) => (
          <li key={course.code} className="py-2 flex items-center justify-between text-sm">
            <span className="font-mono font-bold text-blue-700">{course.code}</span>
            <span className="text-slate-700">{course.name}</span>
            <span className="text-xs text-slate-500">{course.credits} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

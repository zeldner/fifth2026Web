// Ilya Zeldner - Web Technologies Practice 5 (Example 4A: Reusable Child Card Component)
//
// HOW IT WORKS:
//   - Receives primitive props (`name`, `age`, `occupation`) and renders a styled profile card.
//   - Designed to be rendered once for a single user OR mapped multiple times inside `UserList`.
//
// PROS:
//   - Single Responsibility: `ProfileCard` knows how to style ONE user, while `UserList` handles the array.
//
// CONS & COMMON PITFALLS:
//   - Keep presentational cards pure: avoid hardcoding global user arrays inside this component.

export default function ProfileCard({ name, age, occupation }) {
  return (
    <article className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-bold text-slate-900">{name}</h3>
        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
          Age {age}
        </span>
      </div>
      <p className="text-sm text-slate-600">
        Occupation: <strong className="text-slate-800">{occupation}</strong>
      </p>
    </article>
  );
}

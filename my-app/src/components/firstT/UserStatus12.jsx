// Ilya Zeldner - Web Technologies Practice 5 (Example 12: Ternary & Boolean Conditional UI)
//
// HOW IT WORKS:
//   - Uses the ternary operator (`isOnline ? 'ONLINE' : 'OFFLINE'`) for mutually exclusive states,
//     and logical `&&` (`isOnline && <span>...</span>`) for optional extra UI.
//
// PROS:
//   - Expressive, declarative UI state driven directly by boolean props.

export default function UserStatus({ username = 'Anonymous', isOnline = false }) {
  return (
    <div className="p-3.5 border border-slate-200 rounded-xl inline-flex items-center gap-2.5 bg-white shadow-xs m-1">
      <span
        className={`w-2.5 h-2.5 rounded-full ${isOnline ? 'bg-emerald-500' : 'bg-rose-500'}`}
        aria-hidden="true"
      />
      <strong className="text-slate-900 text-sm">{username}</strong>
      <span
        className={`text-xs font-bold px-2 py-0.5 rounded-full ${
          isOnline ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
        }`}
      >
        {isOnline ? 'ONLINE' : 'OFFLINE'}
      </span>
      {isOnline && <span className="text-xs text-slate-500">(Available to chat)</span>}
    </div>
  );
}

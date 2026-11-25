// Ilya Zeldner - Web Technologies Practice 5 (Example 4B: Rendering Component Lists with Keys)
//
// HOW IT WORKS:
//   - Upgraded from a legacy Class Component to a clean modern Functional Component.
//   - Uses `users.map()` to transform an array of user objects into `<ProfileCard />` elements.
//   - Passes a unique, stable `key={user.id}` to each item so React tracks DOM updates accurately.
//
// PROS:
//   - Clean separation between list iteration (`UserList`) and item presentation (`ProfileCard`).
//   - Graceful empty-state fallback when `users` is empty.
//
// CONS & COMMON PITFALLS:
//   - PITFALL: Avoid `key={index}` when items can be added, deleted, or reordered — React may reuse
//     the wrong DOM node. Always prefer a unique ID (`user.id`).

import ProfileCard from './ProfileCard4';

export default function UserList({ users = [] }) {
  if (users.length === 0) {
    return <p className="text-sm text-slate-500 italic">No users available to display.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {users.map((user) => (
        <ProfileCard
          key={user.id ?? user.name}
          name={user.name}
          age={user.age}
          occupation={user.occupation}
        />
      ))}
    </div>
  );
}

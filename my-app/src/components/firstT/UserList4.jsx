// Ilya Zeldner - Web Technologies Practice 5 (Example 4A: Component Composition & List Keys)
//
// HOW IT WORKS:
//   - React favors Composition over Inheritance: `UserList` composes `<ProfileCard />` children.
//   - Maps over `users` and assigns a stable unique `key={user.id}` to each rendered card.
//
// PROS:
//   - Clean separation between list iteration and single-item presentation.
//   - Includes a graceful empty-state fallback when `users` is empty.
//
// CONS & COMMON PITFALLS:
//   - PITFALL: Avoid `key={index}` when lists can be reordered, filtered, or deleted — always
//     use a unique ID (`user.id`) so React preserves DOM state accurately.

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

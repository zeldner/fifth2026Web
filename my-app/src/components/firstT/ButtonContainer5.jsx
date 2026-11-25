// Ilya Zeldner - Web Technologies Practice 5 (Example 5B: Passing Event Handlers to Children)
//
// HOW IT WORKS:
//   - Defines a `handleAction(buttonLabel)` callback in the parent container.
//   - Passes arrow functions `() => handleAction('Submit')` as the `onClick` prop to each `<ActionButton />`.
//
// PROS:
//   - Demonstrates how child components notify parent components when user interactions occur.
//
// CONS & COMMON PITFALLS:
//   - In real apps, replace `alert()` with state updates (Practice 6: `useState`) or API calls.

import ActionButton from './ActionButton5';

export default function ButtonContainer() {
  const handleAction = (label) => {
    alert(`ActionButton callback triggered: "${label}"`);
  };

  return (
    <div className="flex flex-wrap gap-3">
      <ActionButton text="Submit" variant="success" onClick={() => handleAction('Submit')} />
      <ActionButton text="Cancel" variant="danger" onClick={() => handleAction('Cancel')} />
      <ActionButton text="Learn More" variant="primary" onClick={() => handleAction('Learn More')} />
    </div>
  );
}

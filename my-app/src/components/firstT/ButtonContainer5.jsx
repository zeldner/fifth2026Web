// Ilya Zeldner - Web Technologies Practice 5 (Example 5A: Passing Callback Props to Children)
//
// HOW IT WORKS:
//   - Defines a `handleAction(label)` callback in the parent and passes it down via `onClick`.
//   - Uses non-blocking `console.info()` instead of `window.alert()` (which freezes the browser thread).

import ActionButton from './ActionButton5';

export default function ButtonContainer() {
  const handleAction = (label) => {
    console.info(`[Practice 5 Event] ActionButton clicked: "${label}"`);
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-3">
        <ActionButton text="Submit" variant="success" onClick={() => handleAction('Submit')} />
        <ActionButton text="Cancel" variant="danger" onClick={() => handleAction('Cancel')} />
        <ActionButton text="Learn More" variant="primary" onClick={() => handleAction('Learn More')} />
        <ActionButton text="Disabled State" disabled />
      </div>
      <p className="text-xs text-slate-500">
        Open Browser DevTools Console (F12) to inspect non-blocking callback logs when clicking buttons.
      </p>
    </div>
  );
}

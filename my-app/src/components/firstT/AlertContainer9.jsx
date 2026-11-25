// Ilya Zeldner - Web Technologies Practice 5 (Example 9B: Composing Alert Variants)
//
// HOW IT WORKS:
//   - Renders multiple `<Alert />` variants (`success`, `warning`, `error`, `info`) from one component.

import Alert from './Alert9';

export default function AlertContainer() {
  return (
    <div className="space-y-2.5">
      <Alert type="success" message="Operation completed successfully." />
      <Alert type="warning" message="Please back up your database before migrating." />
      <Alert type="error" message="Failed to connect to authentication server." />
      <Alert message="Default fallback variant when type prop is omitted." />
    </div>
  );
}

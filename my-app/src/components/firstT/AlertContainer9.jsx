// Ilya Zeldner
// 9 example of react
// This component demonstrates how to create a reusable alert component
// that can display different types of messages.
// It uses the "Alert" component to create three different alerts:
// success, warning, and error.

import Alert from "./Alert9";

function AlertContainer() {
    return (
      <div className="max-w-md mx-auto mt-8 space-y-2">
        <h3 className="text-xl font-bold text-gray-800 mb-4">System Notifications</h3>
        <Alert message="Operation completed successfully." type="success" />
        <Alert message="Please back up your data." type="warning" />
        <Alert message="Failed to connect to server." type="error" />
    </div>
    );
  }

export default AlertContainer;
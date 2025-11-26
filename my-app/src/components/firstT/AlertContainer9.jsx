// Ilya Zeldner
// 9 example of react
// This component demonstrates how to create a reusable alert component that can display different types of messages.
// It uses the "Alert" component to create three different alerts: success, warning, and error.
import Alert from "./Alert9";
function AlertContainer() {
    return (
      <div>
        <Alert message="Success! Operation completed." type="success" />
        <Alert message="Warning: Data might be lost." type="warning" />
        <Alert message="Error: Something went wrong." type="error" />
    </div>
    );
  }

export default AlertContainer;
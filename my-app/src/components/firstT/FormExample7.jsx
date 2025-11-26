// Ilya Zeldner
// 7 example of react
// This component demonstrates how to create a reusable input 
// component with a label.
// It uses the "LabeledInput" component to create two labeled input fields: 
// one for a name and one for an email address.

import LabeledInput from "./LabeledInput7";
export default function FormExample() {
    return (
      <div>
        <LabeledInput label="Name:" type="text" />
        <LabeledInput label="Email:" type="email" />
        <LabeledInput label="Password:" type="password" />

    </div>
    );
  }
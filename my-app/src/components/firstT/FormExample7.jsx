// Ilya Zeldner
// 7 example of react
// This component demonstrates how to create a reusable input
// component with a label.
// It uses the "LabeledInput" component to create two labeled input fields:
// one for a name and one for an email address.


import LabeledInput from "./LabeledInput7";

export default function FormExample() {
    return (
      <div className="w-full max-w-xs mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl border border-gray-200">
        <h3 className="text-center text-xl font-semibold mb-6 text-gray-700">Sign Up</h3>
        <form>
            <LabeledInput label="Name" type="text" />
            <LabeledInput label="Email" type="email" />
            <LabeledInput label="Password" type="password" />
            
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2">
                Register
            </button>
        </form>
      </div>
    );
  }
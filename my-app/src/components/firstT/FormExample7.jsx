// Ilya Zeldner - Web Technologies Practice 5 (Example 7B: Composing Form Inputs)
//
// HOW IT WORKS:
//   - Composes three `<LabeledInput />` components inside a `<form>` with `onSubmit` prevention.
//   - Passes `autoComplete` and `required` attributes cleanly via `{...rest}` prop forwarding.
//
// PROS:
//   - Eliminates repeated label/input Tailwind class boilerplate across every form field.

import LabeledInput from './LabeledInput7';

export default function FormExample() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted! (In Practice 6 we will bind these inputs with useState)');
  };

  return (
    <div className="w-full max-w-sm p-5 bg-white rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-lg font-bold mb-4 text-slate-800">Create Account</h3>
      <form onSubmit={handleSubmit}>
        <LabeledInput label="Full Name" type="text" autoComplete="name" required />
        <LabeledInput label="Email" type="email" autoComplete="email" required />
        <LabeledInput label="Password" type="password" autoComplete="new-password" required />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2.5 px-4 rounded-lg transition-colors mt-1 cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  );
}

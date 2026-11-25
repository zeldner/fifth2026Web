// Ilya Zeldner - Web Technologies Practice 5 (Example 7A: Composing Reusable Form Inputs)
//
// HOW IT WORKS:
//   - Composes three `<LabeledInput />` components inside a `<form>` with `event.preventDefault()`.
//   - Note: Inputs are uncontrolled here; in Practice 6 we will bind them with `useState`.

import LabeledInput from './LabeledInput7';

export default function FormExample() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.info('[Practice 5 Form Submit]', Object.fromEntries(formData.entries()));
  };

  return (
    <div className="w-full max-w-sm p-5 bg-white rounded-xl shadow-xs border border-slate-200">
      <h3 className="text-lg font-bold mb-4 text-slate-800">Create Account</h3>
      <form onSubmit={handleSubmit}>
        <LabeledInput label="Full Name" name="fullName" type="text" autoComplete="name" required />
        <LabeledInput label="Email" name="email" type="email" autoComplete="email" required />
        <LabeledInput label="Password" name="password" type="password" autoComplete="new-password" required />
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

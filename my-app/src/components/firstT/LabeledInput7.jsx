// Ilya Zeldner
// 7 example of react
// This component demonstrates how to create a reusable input
// component with a label.

export default function LabeledInput({ label, type }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input 
        type={type} 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        placeholder={`Enter ${label}...`}
      />
    </div>
  );
}
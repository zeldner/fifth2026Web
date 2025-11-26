// Ilya Zeldner
// 9 example of react
// This component demonstrates how to create a simple alert
// component that displays messages with different styles based on the type of alert.

export default function Alert(props) {
    
    // Mapping 'types' to Tailwind utility classes
    const alertStyles = {
        success: "bg-green-100 border-green-400 text-green-700",
        warning: "bg-orange-100 border-orange-400 text-orange-700",
        error:   "bg-red-100 border-red-400 text-red-700"
    };

    // Fallback to gray if type is unknown
    const activeClass = alertStyles[props.type] || "bg-gray-100 border-gray-400 text-gray-700";

    return (
      <div className={`border-l-4 p-4 mb-4 rounded ${activeClass} flex items-center shadow-sm`}>
        <span className="font-bold mr-2 uppercase text-xs tracking-wider">{props.type}:</span>
        <span>{props.message}</span>
      </div>
    );
}
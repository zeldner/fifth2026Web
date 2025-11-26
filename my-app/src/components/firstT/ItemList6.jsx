// Ilya Zeldner
// 6 example of react
// This component renders a list of items passed as props.
function ItemList(props) {
    return (
      <ul className="list-disc list-inside bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h4 className="text-lg font-bold mb-2 text-gray-800">Item List</h4>
        {props.items.map((item, index) => (
          <li key={index} className="text-gray-600 hover:text-blue-500 py-1">
            {item}
          </li>
        ))}
    </ul>
    );
  }

export default ItemList;
// Ilya Zeldner
// 6 example of react
// This component renders a list of items passed as props.
function ItemList(props) {
    return (
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
    </ul>
    );
  }

export default ItemList;
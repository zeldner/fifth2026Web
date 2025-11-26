// Ilya Zeldner
// 6 example of react
// This component renders a list of items passed as props.
// It demonstrates how to use props to customize a component's 
// content and structure.
import ItemList from "./ItemList6"; // Import the ItemList component

export default function ItemListContainer() {
    const items = ["Apple", "Banana", "Cherry", "Date"];
  
    return (
      <ItemList items={items}/>
    );
  }
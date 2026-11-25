// Ilya Zeldner - Web Technologies Practice 5 (Example 6A: Container Passing Data Array)
//
// HOW IT WORKS:
//   - Supplies an array of strings (`fruits`) and passes it down to `<ItemList />` via props.

import ItemList from './ItemList6';

export default function ItemListContainer() {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

  return <ItemList title="Fresh Market Items" items={fruits} />;
}

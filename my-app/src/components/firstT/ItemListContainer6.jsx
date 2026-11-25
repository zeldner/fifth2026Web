// Ilya Zeldner - Web Technologies Practice 5 (Example 6B: Container Passing Data Array to List)
//
// HOW IT WORKS:
//   - Prepares a data array (`fruits`) and passes it down to `<ItemList />` via props.
//
// PROS:
//   - Keeps data sourcing separate from list rendering markup.

import ItemList from './ItemList6';

export default function ItemListContainer() {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

  return <ItemList title="Fresh Market Items" items={fruits} />;
}

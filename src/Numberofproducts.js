
import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 0,
}, {
  id: 1,
  name: 'Cheese',
  count: 0,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 0,
}];

export default function ShoppingCart() {

  const [
    products,
    setProducts
  ] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    const newProductList = [...products];
    let index = 0 ; 
    newProductList.forEach((m)=>{
      if(m.id === productId){
         let count = newProductList[index].count ; 
         newProductList[index].count = count + 1 ; 
         setProducts(newProductList); 
      }else {
        index++ ; 
      }
    })

  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}

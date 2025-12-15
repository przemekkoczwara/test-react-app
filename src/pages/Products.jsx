import { useState, useEffect } from 'react';

function Products() {
  const [products, setProducts] = useState([]); // punkt 5
  const [loading, setLoading] = useState(true); // punkt 7
  const [error, setError] = useState(false); // punkt 8

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  // console.log(products);
  // console.log(products[0]);
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} width={100} />
            <h3>{product.title}</h3>
            <p>Price:{product.price} $</p>
            <p>Category:{product.category}</p>
            <p>Rate:{product.rating?.rate ?? 'No score'}</p>
          </li>
        ))}
      </ul>
    </>
  );
  /* a. Przedstaw produkty w formie listy pokazując zdjęcie, tytuł, cenę, kategorię i
ocenę.
b. Dodaj możliwość sortowania po tytule, cenie lub domyślnie.

[
  {
    "id": 0,
    "title": "string",
    "price": 0.1,
    "description": "string",
    "category": "string",
    "image": "http://example.com"
  }
]*/
}

export default Products;

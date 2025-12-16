import { useState, useEffect } from 'react';


function Products({addToBasket}) {
  const [products, setProducts] = useState([]); // punkt 5
  const [loading, setLoading] = useState(true); // punkt 7
  const [error, setError] = useState(false); // punkt 8
  const [sortBy, setSortBy] = useState('default'); // punkt 5b

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

  if (loading) return <p>Loading products ... </p>;
  if (error) return <p>Cannot loading products </p>;

  const sortedProducts = [...products];

  if (sortBy === 'title') {
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy == 'price') {
    sortedProducts.sort((a, b) => Number(a.price) - Number(b.price));
  }

  // console.log(products);
  // console.log(products[0]);
  return (
    <>
      <h1>Products</h1>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="default">default</option>
        <option value="title">Title</option>
        <option value="price">Price</option>
      </select>
      <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} width={100} />
            <h3>{product.title}</h3>
            <p>Price:{product.price} $</p>
            <p>Category:{product.category}</p>
            <p>Rate:{product.rating?.rate ?? 'No score'}</p>
            <button onClick={() => addToBasket(product)}>Add item</button>
          </li>
        ))}
      </ul>
    </>
  );
  /*  Punkt 5a. Przedstaw produkty w formie listy pokazując zdjęcie, tytuł, cenę, kategorię i
ocenę.
5b. Dodaj możliwość sortowania po tytule, cenie lub domyślnie.  


Struktura obiektu:
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

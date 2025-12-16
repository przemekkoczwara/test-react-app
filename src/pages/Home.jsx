import { useState, useEffect } from 'react';
import '../App.css';

function Home({ addToBasket }) {
  const [randomProduct, SetRandomProduct] = useState(null); // punkt 9
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        SetRandomProduct(data[randomIndex]);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products ...</p>;
  if (error) return <p>Cannot loading products ! </p>;

  return (
    <div className="homeContainer">
      <h1>Product of a day</h1>
      <div>
        <img src={randomProduct.image} alt={randomProduct.title} width={140} />
        <h3>{randomProduct.title}</h3>
        <p>Price:{randomProduct.price} $</p>
        <p>Category:{randomProduct.category}</p>
        <p>Rate:{randomProduct.rating?.rate ?? 'No score'}</p>
        <button onClick={() => addToBasket(randomProduct)}>Add item</button>
      </div>
    </div>
  );
}

export default Home;

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Navbar from './components/Navbar.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';
import { useState, useEffect } from 'react';
import BasketDisplay from './components/BasketDisplay.jsx';

function App() {
  // // test basket

  // const [basket, setBasket] = useState([
  //   { product: { id: 1, title: 'Test Product' }, count: 5 },
  // ]);

  const [basket, setBasket] = useState(() => {
    const savedBasket = localStorage.getItem('basket');
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (product) => {
    setBasket((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id);
      if (existingItem) {
        const updateBasket = prev.map((item) => {
          if (item.product.id === product.id) {
            return {
              ...item,
              count: item.count + 1,
            };
          }
          return item;
        });
        return updateBasket;
      } else {
        return [
          ...prev,
          {
            product: product,
            count: 1,
          },
        ];
      }
    });
  };

  const removeFromBasket = (productId) => {
    setBasket((prev) => {
      const updateBasket = prev.map((item) => {
        if (item.product.id === productId) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });
      const filteredBasket = updateBasket.filter((item) => item.count > 0);
      return filteredBasket;
    });
  };

  return (
    <>
      <Navbar />
      <ShoppingCart basket={basket}></ShoppingCart>
      <BasketDisplay
        basket={basket}
        addTobasket={addToBasket}
        removeFromBasket={removeFromBasket}
      />
      <Routes>
        <Route path="/" element={<Home addToBasket={addToBasket} />}></Route>
        <Route
          path="/products"
          element={<Products addToBasket={addToBasket} />}
        ></Route>
        <Route path="*" element={<h1>404-Page not found</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;

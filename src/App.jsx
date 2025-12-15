import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Navbar from './components/Navbar.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';
import { useState } from 'react';

function App() {
  // // test basket

  // const [basket, setBasket] = useState([
  //   { product: { id: 1, title: 'Test Product' }, count: 5 },
  // ]);

  return (
    <>
      <Navbar />
      <ShoppingCart basket={basket}></ShoppingCart>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route
          path="*"
          element={
            <h1>404-Page not found / 404-Jesteś pod błędnym adresem !</h1>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route
        path="*"
        element={<h1>404-Page not found / 404-Jesteś pod błędnym adresem !</h1>}
      ></Route>
    </Routes>
  );
}

export default App;

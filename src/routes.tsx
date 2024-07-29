import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Product from './pages/Product';
import CheckOut from './pages/Checkout';

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="checkout" element={<CheckOut />} />
  </Routes>
);

export default Router;

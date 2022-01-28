import { Home } from './views/Home';
import { Products } from './views/Products';
import { Contacts } from './views/Contacts';
import { NotFound } from './views/NotFound';
import { Routes, Route, Link } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/contacts">Contacts</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

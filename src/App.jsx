import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Products, Contacts, NotFound, Product } from './views';
import { Layout } from './components';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/testNavigate" element={<Navigate to="/" replace />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

import { Link } from 'react-router-dom';
import { HeaderStyled } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/contacts">Contacts</Link>
    </HeaderStyled>
  );
};

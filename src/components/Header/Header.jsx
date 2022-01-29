import { Link } from 'react-router-dom';
import { HeaderStyled, NavLinkStyled } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/products">Products</NavLinkStyled>
      <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
    </HeaderStyled>
  );
};

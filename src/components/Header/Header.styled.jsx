import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  min-height: 70px;
  padding: 0 15px 5px;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  a {
    font-size: 24px;
    text-decoration: none;
    color: currentColor;

    &:hover {
      color: orange;
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  &.active {
    color: orange;
  }
`;

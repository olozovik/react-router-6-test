import { Header, Container } from '../../components';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Container>
        <footer>2022 ReactRouter Test</footer>
      </Container>
    </>
  );
};

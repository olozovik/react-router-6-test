import { Header, Container, ButtonGoBack, Footer } from '../../components';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <ButtonGoBack />
      <Outlet />
      <Container>
        <Footer>2022 ReactRouter Test</Footer>
      </Container>
    </>
  );
};

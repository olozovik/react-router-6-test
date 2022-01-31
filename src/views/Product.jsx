import { useParams } from 'react-router-dom';
import { Container } from '../components';

export const Product = () => {
  const { id } = useParams();

  return (
    <Container>
      <h2>Product {id}</h2>
    </Container>
  );
};

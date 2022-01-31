import { useNavigate } from 'react-router-dom';
import { Container } from '../../components';

export const ButtonGoBack = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <Container>
      <button onClick={goBack}>Go back</button>
    </Container>
  );
};

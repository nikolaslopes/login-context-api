import { useNavigate } from 'react-router-dom';

import ButtonSubmit from '../../components/Button/ButtonSubmit';
import { Container } from './styles';

export function Home() {
  const navigate = useNavigate();
  function handleButtonHomeClick() {
    navigate('/login');
  }
  return (
    <Container>
      <ButtonSubmit
        label="Click me"
        widthButton="472px"
        heightButton="62px"
        onClick={handleButtonHomeClick}
      />
    </Container>
  );
}

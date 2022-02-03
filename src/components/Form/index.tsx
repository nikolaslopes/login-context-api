import { Input } from '../FormElements';
import { InputPassword } from '../Input/InputPassword';
import { Container } from './styles';

export function Form() {
  return (
    <Container>
      <Input placeholder="E-mail" />
      <InputPassword placeholder="Password" />
    </Container>
  );
}

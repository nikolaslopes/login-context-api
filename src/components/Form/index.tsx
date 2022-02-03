import { Input } from '../FormElements';
import { InputPassword } from '../Input/InputPassword';
import { Container } from './styles';

export function Form() {
  return (
    <Container>
      <div className="first-input">
        <Input placeholder="E-mail" />
      </div>
      <InputPassword placeholder="Password" />
    </Container>
  );
}

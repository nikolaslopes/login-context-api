import { InputHTMLAttributes, useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

import { Container } from './styles';

export interface IInputPassword extends InputHTMLAttributes<HTMLInputElement> {
  children?: JSX.Element;
  widthInput?: string;
}

export function InputPassword({ widthInput }: IInputPassword) {
  const [viewLoginPassword, setViewLoginPassword] = useState(false);

  function toggleViewPassword() {
    if (viewLoginPassword) {
      setViewLoginPassword(false);
    } else {
      setViewLoginPassword(true);
    }
  }

  return (
    <Container widthInput={widthInput}>
      <input type={viewLoginPassword === false ? 'password' : 'text'} />
      <button type="button" onClick={toggleViewPassword}>
        {viewLoginPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
      </button>
    </Container>
  );
}

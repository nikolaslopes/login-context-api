import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAuth } from '../../context/AuthProvider/useAuth';
import { ButtonSubmit } from '../Button/ButtonSubmit';
import { Input } from '../FormElements';
import { InputPassword } from '../Input/InputPassword';
import { Container } from './styles';

export function Form() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const auth = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    try {
      await auth.authenticate(email, password);

      navigate('/profile');
      toast.success('Bem vindo!', {
        autoClose: 2000,
      });
    } catch (error) {
      toast.error('Credenciais Inválidas!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <div className="first-input">
        <Input
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <InputPassword
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <ButtonSubmit label="Sign In" type="submit" widthButton="100px" />
    </Container>
  );
}

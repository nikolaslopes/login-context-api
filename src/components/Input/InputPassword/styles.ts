import styled from 'styled-components';

import { formElementsCSS } from '../../FormElements';
import { IInputPassword } from './index';

export const Container = styled.main<IInputPassword>`
  width: 100%;
  position: relative;

  input {
    ${formElementsCSS}
    height: min(56px, 10vw);
    width: ${({ widthInput }) => widthInput || '378px'};
  }

  button {
    position: absolute;
    right: 0.5rem;
    bottom: 0.2rem;
    outline: none;

    font-size: 28px;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;

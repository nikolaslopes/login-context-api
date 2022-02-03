import styled, { css } from 'styled-components';

import { IInputField } from './types';

export const formElementsCSS = css`
  width: 100%;
  border: 1px solid;
  background: #0000000b;
  border-radius: 10px;
  -webkit-tap-highlight-color: transparent;
  height: 52px;
  outline: none;
  padding: 16.5px 14px;
  color: #202020;
  font-size: 16px;

  :hover {
    border: 3px solid;
  }
`;

export const Input = styled.input<IInputField>`
  ${formElementsCSS}
  height: min(56px, 10vw);

  width: ${({ widthInput }) => widthInput || '378px'};
`;

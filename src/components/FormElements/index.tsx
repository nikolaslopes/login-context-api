import styled, { css } from 'styled-components';

import { IInputField } from './types';

export const formElementsCSS = css`
  width: 100%;
  border: none;
  background: #0000000b;
  border-radius: 4px 4px 0px 0px;
  letter-spacing: inherit;
  -webkit-tap-highlight-color: transparent;
  height: 52px;
  outline: none;
  padding: 16.5px 14px;
  color: #202020;
  font-size: 16px;
`;

export const Input = styled.input<IInputField>`
  ${formElementsCSS}
  height: min(56px, 10vw);

  width: ${({ widthInput }) => widthInput || '378px'};
`;

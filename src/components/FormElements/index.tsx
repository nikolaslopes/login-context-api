import styled, { css } from 'styled-components';

import { IInputField } from './types';

export const formElementsCSS = css`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary.main};
  background: #0000000b;
  border-radius: 10px;
  -webkit-tap-highlight-color: transparent;
  height: 52px;
  outline: none;
  padding: 16.5px 14px;
  color: #fff;
  font-size: 16px;
  transition: 0.2s ease;

  :hover {
    border: 2px solid ${({ theme }) => theme.colors.primary.light};
  }

  :focus {
    border: 3px solid ${({ theme }) => theme.colors.primary.light};
  }
`;

export const Input = styled.input<IInputField>`
  ${formElementsCSS}
  height: min(56px, 10vw);

  width: ${({ widthInput }) => widthInput || '378px'};
`;

import styled from 'styled-components';

import { IButtonSubmit } from './types';

export const ButtonField: any = styled.div<IButtonSubmit>`
  button {
    width: ${({ widthButton }) => widthButton || '338px'};
    height: ${({ heightButton }) => heightButton || '55px'};

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border-radius: 7px;
    border: none;
    padding: 0 16px;
    font-size: 16px;
    font-weight: 700;
    background: ${({ theme }) => theme.colors.primary.main};
    color: #fff;
    transition: filter 0.2s ease-out;

    &:hover {
      filter: brightness(0.8);
    }

    &:active {
      background: ${({ theme }) => theme.colors.primary.dark};
    }

    &[disabled] {
      background: #ccc;
      cursor: default;
    }
  }
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  body {
    background: ${({ theme }: any) => theme.colors.background};
    font-size: 16px;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  button {
    cursor: pointer;
  }
`;

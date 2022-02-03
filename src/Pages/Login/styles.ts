import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: 8px;
  box-shadow: 0px 24px 38px #00000024;

  width: 800px;
  height: 600px;

  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

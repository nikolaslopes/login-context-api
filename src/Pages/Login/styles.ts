import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: 8px;
  box-shadow: 0px 24px 38px #00000024;

  max-width: 722px;
  width: 100%;
  height: 600px;
  margin: 0 auto;

  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 720px) {
    width: 400px;
    height: 400px;
  }
`;

import styled from 'styled-components';
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 134px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  div {
    width: 100%;
  }

  div:nth-child(1),
  div:nth-child(2) {
    margin-bottom: 8px;
  }

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin: 42px auto 0;
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;
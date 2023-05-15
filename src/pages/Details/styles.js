import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;

    margin: 40px 124px;

    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }
  }
`;

export const Content = styled.div`
  margin: 0 auto;

  .buttons {
    display: flex;
    justify-content: space-between;
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  h1 {
    margin: 24px 0;
  }

  .details {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  .tags {
    margin: 40px 0;
  }

  p {
    font-family: 'Roboto Slab';
    line-height: 21px;
  }
`;

export const UserInfo = styled(Link)`
  img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  span {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

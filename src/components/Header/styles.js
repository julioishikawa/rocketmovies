import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;

  padding: 0 124px;

  h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  
  input {
    font-size: 14px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 10px;
    line-height: 24px;
  }

  a {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
    
  span {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

  strong {
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 64px;
  flex-grow: 1;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;
  
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  font-size: 14px;
  line-height: 18px;

  position: absolute;
  bottom: 38px;
  right: 196px;

  a {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;


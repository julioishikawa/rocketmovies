import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Wrapper = styled.div`
  grid-area: wrapper;

  padding: 0px 124px;
  margin: 46px 0 36px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    font-weight: 400;
    font-size: 32px;
  }
`;

export const NewMovie = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  padding: 13.5px 32px;
  border-radius: 8px;
`;

export const Content = styled.div`
  grid-area: content;
  max-height: calc(100vh - 300px);

  margin: 0px 124px;
  padding-right: 8px;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }
`;
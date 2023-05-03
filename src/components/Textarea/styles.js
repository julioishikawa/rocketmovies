import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  padding: 18px 16px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;
  border-radius: 10px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
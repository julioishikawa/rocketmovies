import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;

    margin: 0 124px;
    padding: 40px 16px 0 0;

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  header {
    display: flex;
    flex-direction: column;
    gap: 24px;

    button {
      width: 70px;
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.COLORS.PINK};

      background: none;
      border: none;
    }
  }

  .infos {
    display: flex;
    gap: 40px;

    input {
      padding: 18px 16px;
    }
  }

  h2 {
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  .tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;

    padding: 16px;

    margin-top: 24px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 8px;
  }

  .buttons {
    display: flex;
    gap: 40px;

    margin-bottom: 50px;

    > :nth-child(1) {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.PINK};
      transition: all 0.3s;

      :nth-child(1):hover {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      }
    }
  }
`;

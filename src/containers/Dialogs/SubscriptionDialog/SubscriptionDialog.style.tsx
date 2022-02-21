import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 49px 42px 44px 38px;

  h2 {
    margin-bottom: 30px;
  }

  @media (min-width: 768px) {
    padding: 69px 62px 64px 58px;
  }
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.grey};
  background: ${({ theme }) => theme.navigation};
  color: ${({ theme }) => theme.text};
  padding: 5px;
  max-width: 490px;
  min-width: min-content;
  margin-bottom: 24px;
  margin-top: 5px;

  :focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }

  @media only screen and (min-width: 768px) {
    min-width: 300px;
  }
`;

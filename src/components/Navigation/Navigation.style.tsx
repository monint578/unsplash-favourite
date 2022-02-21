import styled from "styled-components";

export const NavigationContainer = styled.nav`
  background-color: ${({ theme }) => theme.navigation};
  transition: all 0.1s ease-in-out;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  @media only screen and (min-width: 768px) {
    position: sticky;
    width: 90px;
    height: 100vh;
  }
`;

export const NavigationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    height: 100vh;
    padding: 0;
  }
`;

export const UlItem = styled.ul`
  display: flex;

  .disableactive {
    background-color: transparent;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: column;
  }
`;

export const LiItem = styled.li`
  > a,
  > svg,
  > button {
    display: flex;
    height: 60px;
    padding: 0 20px;
    align-items: center;
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;
  }

  > a:hover,
  > svg:hover,
  > button:hover {
    background-color: ${({ theme }) => theme.grey};
  }

  > a:focus,
  > svg:focus,
  > button:focus {
    border: 1px solid ${({ theme }) => theme.text};
  }

  .active {
    background-color: ${({ theme }) => theme.primary};
  }

  .active:hover {
    background-color: ${({ theme }) => theme.primaryDarken};
  }

  svg {
    fill: ${({ theme }) => theme.text};
    transition: all 0.1s ease-in-out;
    width: 20px;
  }

  svg path {
    fill: ${({ theme }) => theme.text};
    transition: all 0.1s ease-in-out;
  }

  @media only screen and (min-width: 768px) {
    > a,
    > svg,
    > button {
      height: 80px;
      padding: 0 35px;
    }
  }
`;

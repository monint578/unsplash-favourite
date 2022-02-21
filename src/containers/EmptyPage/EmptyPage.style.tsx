import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  gap: 15px;

  @media only screen and (min-width: 768px) {
    width: 90vw;
  }
`;

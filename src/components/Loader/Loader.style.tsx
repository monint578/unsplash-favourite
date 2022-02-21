import styled from "styled-components";

export const LoaderContainer = styled.div`
  width: 90vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  z-index: 999;
  gap: 10px;
`;

export const Loaders = styled.div`
  border: 10px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  border-top: 10px solid ${({ theme }) => theme.text};
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

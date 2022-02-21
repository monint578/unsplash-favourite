import styled from "styled-components";

export const ContainedButton = styled.button`
  background: ${({ theme }) => theme.primary};
  padding: 15px;
  letter-spacing: 3.2px;
  max-height: 50px;

  :hover {
    background: ${({ theme }) => theme.grey};
    transition: all 0.1s ease-in-out;
  }

  :focus {
    border: 1px solid ${({ theme }) => theme.text};
  }

  svg {
    height: 20px;
    width: 100%;
    fill: ${({ theme }) => theme.text};
  }
`;

export const TextButton = styled.button`
  letter-spacing: 3.2px;
  padding: 15px;

  :hover {
    background: ${({ theme }) => theme.grey};
    transition: all 0.1s ease-in-out;
  }

  :focus {
    border: 1px solid ${({ theme }) => theme.text};
  }

  svg {
    height: 20px;
    width: 100%;
    fill: ${({ theme }) => theme.text};
  }

  svg:focus {
    fill: ${({ theme }) => theme.text};
  }
`;

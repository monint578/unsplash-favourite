import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  outline: 0;
  width: fit-content;

  &.fade-in {
    animation: fadein 1s;
  }

  &.fade-out {
    animation: fadeout 1s;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #151515cc;
  z-index: 500;
`;

export const StyledModal = styled.div`
  z-index: 100;
  position: relative;
  margin: auto;
  width: fit-content;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px 15px;
  z-index: 100;

  :hover {
    cursor: pointer;
  }

  :focus svg {
    fill: ${({ theme }) => theme.text};
  }

  svg {
    width: 20px;
    fill: ${({ theme }) => theme.grey};

    :hover {
      fill: ${({ theme }) => theme.primary};
      transition: all 0.1s ease-in-out;
    }
  }
`;

export const Content = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 90vh;
  min-height: auto;

  &.size-md {
    max-width: 610px;
  }

  &.size-lg {
    max-width: 90vw;
    min-width: 50vw;
  }

  @media only screen and (min-width: 768px) {
    &.size-md {
      max-width: 610px;
    }

    &.size-lg {
      max-width: 60vw;
      min-width: 50vw;
    }
  }
`;

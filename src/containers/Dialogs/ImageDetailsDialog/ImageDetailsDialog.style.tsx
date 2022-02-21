import styled from "styled-components";

export const Container = styled.div`
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 50% 50%;
    height: 80vh;
  }

  & .margin-bottom {
    margin-bottom: 2vh;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  @media only screen and (min-width: 768px) {
    img {
      height: 80vh;
      object-fit: contain;
      width: 100%;
      background: ${({ theme }) => theme.backgroundOpacity};
    }
    :before {
      content: " ";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
      backdrop-filter: blur(10px);
    }
  }
`;

export const ContentContainer = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 2vw;

  @media (min-width: 768px) {
    padding: 3vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    height: 20px;
    fill: ${({ theme }) => theme.text};
  }
`;

export const Exif = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 5vh;
    column-gap: 2.5vh;
  }
`;

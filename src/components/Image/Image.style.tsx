import styled from "styled-components";

export const Figure = styled.figure`
  display: grid;
  grid-template-rows: 1fr auto;
  break-inside: avoid;
  width: 85vw;
  height: 100%;
  padding: 5vw;
  padding-bottom: 0;

  > img {
    grid-row: 1 / -1;
    grid-column: 1;
  }

  :hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    margin-bottom: 1.5vw;
    height: 23vw;
    width: 100%;
    padding: 0;

    :nth-of-type(even) {
      height: 11.5vw;
      width: 100%;
    }
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Figcaption = styled.figcaption`
  grid-row: 1;
  grid-column: 1;
  background-color: ${({ theme }) => theme.primary};
  padding: 10px;
  justify-self: end;
  height: fit-content;

  svg {
    fill: ${({ theme }) => theme.text};
    height: 16px;
  }
`;

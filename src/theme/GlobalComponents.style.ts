import styled from "styled-components";
import { DividerProps } from "../types/Theme";

export const Flex = styled.div`
  display: flex;

  &.column {
    flex-direction: column;
  }

  &.justify-center {
    justify-content: center;
  }

  &.justify-space-between {
    justify-content: space-between;
  }
`;

export const Divider = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.grey};
  margin: ${({ marginx }: DividerProps) => marginx} 0;
`;

export const MasonryGrid = styled.div`
  margin: 15px;
  column-count: 1;
  column-gap: 15px;
  row-gap: 15px;
  animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (min-width: 644px) {
    column-count: 2;
  }

  @media (min-width: 768px) {
    column-count: 3;
  }

  @media (min-width: 1024px) {
    column-count: 4;
  }

  @media (min-width: 1440px) {
    column-count: 5;
    margin: 1.5vw;
    column-gap: 1.5vw;
    row-gap: 1.5vw;
  }

  @media (min-width: 2100px) {
    column-count: 7;
  }
`;

import React from "react";
import { LoaderContainer, Loaders } from "./Loader.style";

export default function Loader() {
  return (
    <LoaderContainer>
      <Loaders />
      <h4>Loading...</h4>
    </LoaderContainer>
  );
}

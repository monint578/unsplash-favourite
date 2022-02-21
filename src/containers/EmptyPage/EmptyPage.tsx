import React from "react";
import Button from "../../components/Button/Button";
import { Container } from "./EmptyPage.style";

export default function EmptyPage() {
  return (
    <Container>
      <h2>Favourite image list is empty</h2>
      <Button variant="contained">Go and like the images</Button>
    </Container>
  );
}

import React from "react";
import Button from "../../components/Button/Button";
import { Container } from "./EmptyPage.style";
import { NavLink } from "react-router-dom";


export default function EmptyPage() {
  return (
    <Container>
      <h2>Favourite image list is empty</h2>
      <NavLink to="/">
      <Button variant="contained">Discover</Button>
      </NavLink>
    </Container>
  );
}

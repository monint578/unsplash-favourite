import React, { PropsWithChildren } from "react";
import Navigation from "../Navigation/Navigation";
import { Container, Section } from "./Base.style";

export default function Base({ children }: PropsWithChildren<{}>) {
  return (
    <Container>
      <Navigation />
      <Section>{children}</Section>
      {/* <Container
        maxWidth="lg"
        disableGutters
        classes={{ root: classes.container, maxWidthLg: classes.maxWidthLg }}
      >
        {children}
      </Container> */}
    </Container>
  );
}

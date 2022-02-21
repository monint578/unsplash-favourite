import React, { PropsWithChildren } from "react";
import { Flex } from "../../theme/GlobalComponents.style";
import Navigation from "../Navigation/Navigation";
import { Section } from "./Base.style";

export default function Base({ children }: PropsWithChildren<{}>) {
  return (
    <Flex>
      <Navigation />
      <Section>{children}</Section>
    </Flex>
  );
}

import React, { FunctionComponent } from "react";
import { Container, Input } from "./SubscriptionDialog.style";
import Button from "../../../components/Button/Button";
import { Flex } from "../../../theme/GlobalComponents.style";

interface SubscriptionDialogProps {
  handleSubmit: () => void;
  message: string;
}

export const SubscriptionDialog: FunctionComponent<SubscriptionDialogProps> = ({
  handleSubmit,
}) => {
  return (
    <React.Fragment>
      <Container>
        <h2>Subscribe to our newsetter</h2>
        <form onSubmit={handleSubmit} id="subscribe-form" noValidate>
          <Flex className="column">
            <label htmlFor="name">
              <small>Your name</small>
            </label>
            <Input
              type="text"
              name="name"
              id="name"
              aria-label="Name"
              aria-required="true"
              placeholder=""
              minLength={2}
              pattern="[^0-9]"
              required
            />
          </Flex>
          <Flex className="column">
            <label htmlFor="email">
              <small>Your email address</small>
            </label>
            <Input
              type="email"
              name="email"
              id="email"
              aria-label="Email"
              aria-required="true"
              placeholder=""
              required
            />
          </Flex>
        </form>
        <Button type="submit" variant="contained">
          Subscribe
        </Button>
      </Container>
    </React.Fragment>
  );
};

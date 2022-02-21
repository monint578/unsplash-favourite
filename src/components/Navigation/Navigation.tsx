import React, { useCallback } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Photo } from "../../assets/photo.svg";
import { ReactComponent as Envelope } from "../../assets/envelope.svg";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { NavLink } from "react-router-dom";
import { ThemeButton } from "../../components/TogglerButton/TogglerButton";
import { Modal } from "../../components/Modal/Modal";
import { SubscriptionDialog } from "../../containers/Dialogs/SubscriptionDialog/SubscriptionDialog";
import { useModal } from "../../state/useModal";
import Button from "../Button/Button";
import {
  NavigationContainer,
  NavigationItem,
  UlItem,
  LiItem,
} from "./Navigation.style";

export default function Navigation() {
  const { isModalOpen, toggleModal } = useModal();

  const handleSubmit = useCallback(() => {}, []);

  return (
    <>
      <NavigationContainer>
        <NavigationItem>
          <UlItem>
            <LiItem>
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive ? "disableactive" : ""
                }
              >
                <Logo />
              </NavLink>
            </LiItem>
          </UlItem>

          <UlItem>
            <LiItem>
              <NavLink
                to="/"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                <Photo />
              </NavLink>
            </LiItem>
            <LiItem>
              <NavLink
                to="/favourite"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                <Heart />
              </NavLink>
            </LiItem>
          </UlItem>

          <UlItem>
            <LiItem>
              <Button onClick={toggleModal} variant="text" type="button">
                <Envelope />
              </Button>
            </LiItem>
            <LiItem>
              <ThemeButton />
            </LiItem>
          </UlItem>
        </NavigationItem>
      </NavigationContainer>
      <Modal
        isOpen={isModalOpen}
        handleClose={toggleModal}
        headerText="subscription"
        modalSize="md"
        modalContent={
          <SubscriptionDialog
            handleSubmit={() => handleSubmit}
            message="Are you sure you want to delete element?"
          />
        }
      />
    </>
  );
}

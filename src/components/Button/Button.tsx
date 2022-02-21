import React, { PropsWithChildren } from "react";
import { ContainedButton, TextButton } from "./Button.style";

interface ButtonProps extends PropsWithChildren<{}> {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant: "text" | "contained";
}

export default function Button({
  children,
  onClick,
  type,
  variant,
}: ButtonProps) {
  if (variant === "text") {
    return (
      <TextButton onClick={onClick} type={type ? type : undefined}>
        {children}
      </TextButton>
    );
  } else {
    return <ContainedButton onClick={onClick}>{children}</ContainedButton>;
  }
}

import * as React from "react";
import "@suankularb-components/css/dist/css/components/button.css";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button className="skc-button">{props.children}</button>;
}

Button.displayName = "Button";

import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
}
declare function Button(props: ButtonProps): JSX.Element;
declare namespace Button {
  var displayName: string;
}

interface ChipProps {
  children: React.ReactNode;
}
declare function Chip(props: ChipProps): JSX.Element;
declare namespace Chip {
  var displayName: string;
}

export { Button, ButtonProps, Chip, ChipProps };

import * as React from "react";

export interface ChipProps {
  children: React.ReactNode;
}

export function Chip(props: ChipProps) {
  return <button>{props.children}</button>;
}

Chip.displayName = "Chip";


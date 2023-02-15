import * as React from "react";
import React__default from "react";

interface SKComponent {
  className?: string;
  style?: React__default.CSSProperties;
}

interface ButtonProps extends SKComponent {
  children?: React.ReactNode;
  appearance: "filled" | "tonal" | "outlined" | "text";
  icon?: JSX.Element;
  alt?: string;
  tooltip?: string;
  selected?: boolean;
  dangerous?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => any;
  href?: string;
  element?: ({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className: string;
  }) => any;
}
/**
 * Button helps users take action, whether it’s logging in, liking a post, or going to a page.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.48e8htvs5p0g SKCom documentation}
 *
 * @param children The text displayed inside the Button.
 * @param appearance The appearance of the Button.
 * @param icon An icon can appear before the text (`children`) in a Button. In a page with many buttons, icons can quickly orient users.
 * @param alt A description of the Button for screen readers, similar to `alt` on `<img>`.
 * @param tooltip A message shown in a tooltip when the user hovers over the Button.
 * @param selected If the Button is selected. `icon` is replaced with a checkmark if this is true.
 * @param dangerous If the action the Button accomplishes is dangerous, like deleting your account.
 * @param loading Disable the Button and add a Progress spinner in front of the text to signify loading status.
 * @param disabled Turns the Button gray and block any action associated with it.
 * @param onClick The function called when the user interacts with the Button, similar to `onClick` on `<button>`.
 * @param href The URL of the page this Button leads to, similar to `href` on `<a>`.
 * @param element Change the underlying element from `<a>` to a custom element.
 */
declare function Button({
  children,
  appearance,
  icon,
  alt,
  tooltip,
  selected,
  dangerous,
  loading,
  disabled,
  onClick,
  href,
  element,
}: ButtonProps): any;
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

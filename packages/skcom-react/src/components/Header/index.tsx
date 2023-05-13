// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/header.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link Header}.
 */
export interface HeaderProps extends SKComponent {
  /**
   * Header contains Buttons. You can put as many Buttons inside Header as
   * needed, but the recommended limit is 3.
   *
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * The level of the Header. The number corresponds to an HTML header element,
   * i.e., `3` corresponds to `<h3>`.
   *
   * - `2` by default.
   * - Must be a number from 2-6. `1` is not allowed as `<h1>` is reserved for Page Header.
   * - Optional.
   */
  level?: 2 | 3 | 4 | 5 | 6;

  /**
   * An icon can appear before the text (`children`) in a Header. In a page
   * with many headers, icons can quickly orient users.
   *
   * - You are encouraged to use Material Icons as the value for `icon`.
   * - Optional.
   */
  icon?: JSX.Element;

  /**
   * @deprecated Use `element` instead.
   */
  hAttr?: React.HTMLAttributes<HTMLHeadingElement>;
}

/**
 * A row of Buttons. Header handles spacing and overflow.
 *
 * @see {@link https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing#heading=h.eq5d681m3fpe SKCom documentation}
 *
 * @param children The text of the Header.
 * @param level The level of the Header. The number corresponds to an HTML header element.
 * @param icon An icon can appear before the text (`children`) in a Header.
 */
export function Header({
  children,
  level,
  icon,
  element,
  style,
  className,
}: HeaderProps) {
  return React.createElement(
    element || (level ? "h" + level : "h2"),
    { style, className: cn(["skc-header", className]) },

    icon && <span className="skc-header__icon">{icon}</span>,
    <span className="skc-header__text">{children}</span>
  );
}

Header.displayName = "Header";

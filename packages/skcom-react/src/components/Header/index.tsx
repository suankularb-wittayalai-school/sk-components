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
   * Attributes for the underlying `<h2>`-`<h6>` element.
   *
   * - Optional.
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
 * @param hAttr Attributes for the underlying `<h2>`-`<h6>` element.
 */
export function Header({
  children,
  level,
  icon,
  hAttr,
  style,
  className,
}: HeaderProps) {
  const props = {
    style,
    className: cn(["skc-header", className]),
    ...hAttr,
  } satisfies React.HTMLAttributes<HTMLHeadingElement>;

  const content = (
    <>
      {icon && <span className="skc-header__icon">{icon}</span>}
      <span className="skc-header__text">{children}</span>
    </>
  );

  return level === 6 ? (
    <h6 {...props}>{content}</h6>
  ) : level === 5 ? (
    <h5 {...props}>{content}</h5>
  ) : level === 4 ? (
    <h4 {...props}>{content}</h4>
  ) : level === 3 ? (
    <h3 {...props}>{content}</h3>
  ) : (
    <h2 {...props}>{content}</h2>
  );
}

Header.displayName = "Header";

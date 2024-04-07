// External libraries
import * as React from "react";

// Internal components
import { Button } from "../Button";
import { MaterialIcon } from "../MaterialIcon";
import { Menu } from "../Menu";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/card-header.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link CardHeader Card Header}.
 */
export interface CardHeaderProps extends SKComponent {
  /**
   * An avatar is placed before all content in a Card Header. A use case would
   * be the profile picture of a user.
   *
   * - You are encouraged to use Avatar as the value for `avatar`.
   * - Incompatible with `icon`.
   * - Optional.
   */
  avatar?: JSX.Element;

  /**
   * An icon can appear before all content in a Card Header. In a page with
   * many cards, icons can quickly orient users.
   *
   * - You are encouraged to use Material Icons as the value for `icon`.
   * - Incompatible with `avatar`.
   * - Optional.
   */
  icon?: JSX.Element;

  /**
   * The most predominant text inside a Card.
   *
   * - Always required.
   */
  title: string | JSX.Element;

  /**
   * A short text complementing the title text.
   *
   * - Optional.
   */
  subtitle?: string | JSX.Element;
}

/**
 * The header of a Card. Sometimes all a Card needs is a Card Header.
 *
 * @param avatar An avatar is placed before all content in a Card Header.
 * @param icon An icon can appear before all content in a Card Header.
 * @param title The most predominant text inside a Card.
 * @param subtitle A short text complementing the title text.
 */
export function CardHeader({
  avatar,
  icon,
  title,
  subtitle,
  element,
  style,
  className,
}: CardHeaderProps) {
  return React.createElement(
    element || "div",
    { style, className: cn(["skc-card-header", className]) },

    // Avatar
    avatar && <div className="skc-card-header__avatar">{avatar}</div>,

    // Icon
    icon && <div className="skc-card-header__icon">{icon}</div>,

    // Content
    <div className="skc-card-header__content">
      <h3 className="skc-card-header__title">{title}</h3>
      {subtitle && (
        <span className="skc-card-header__subtitle">{subtitle}</span>
      )}
    </div>,
  );
}

CardHeader.displayName = "CardHeader";

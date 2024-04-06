import "@suankularb-components/css/dist/css/components/card-header.css";
import { ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";

/**
 * The header of a Card. Sometimes all a Card needs is a Card Header.
 *
 * @param children Trailing content placed after all content in a Card Header.
 * @param avatar An avatar is placed before all content in a Card Header.
 * @param icon An icon can appear before all content in a Card Header.
 * @param title The most predominant text inside a Card.
 * @param subtitle A short text complementing the title text.
 */
const CardHeader: StylableFC<{
  /**
   * Trailing content placed after all content in a Card Header. A use case
   * would be an overflow Menu or a set of Buttons.
   *
   * - Optional.
   */
  children?: ReactNode;

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
}> = ({
  children,
  avatar,
  icon,
  title,
  subtitle,
  element: Element = "div",
  style,
  className,
}) => (
  <Element style={style} className={cn("skc-card-header", className)}>
    {/* Avatar */}
    {avatar && <div className="skc-card-header__avatar">{avatar}</div>}

    {/* Icon */}
    {icon && <div className="skc-card-header__icon">{icon}</div>}

    {/* Text content */}
    <div className="skc-card-header__content">
      <h3 className="skc-card-header__title">{title}</h3>
      {subtitle && (
        <span className="skc-card-header__subtitle">{subtitle}</span>
      )}
    </div>

    {/* Trailing */}
    {children}
  </Element>
);

CardHeader.displayName = "CardHeader";

export default CardHeader;

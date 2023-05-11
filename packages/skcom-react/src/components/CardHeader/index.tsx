// External libraries
import * as React from "react";

// Internal components
import { Button } from "../Button";
import { MaterialIcon } from "../MaterialIcon";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/card-header.css";

// Utilities
import { cn } from "../../utils/className";
import { Menu } from "../Menu";

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

  /**
   * The overflow Menu of this Card. If defined, an overflow icon appears on
   * the right. The value of `overflow` is shown on click.
   *
   * - Must be a Menu.
   * - Optional.
   */
  overflow?: JSX.Element;
}

/**
 * The header of a Card. Sometimes all a Card needs is a Card Header.
 *
 * @see {@link https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing#heading=h.5y6ktiqu5rba SKCom documentation}
 *
 * @param avatar An avatar is placed before all content in a Card Header.
 * @param icon An icon can appear before all content in a Card Header.
 * @param title The most predominant text inside a Card.
 * @param subtitle A short text complementing the title text.
 * @param overflow The overflow Menu of this Card. If defined, an overflow icon appears on the right.
 */
export function CardHeader({
  avatar,
  icon,
  title,
  subtitle,
  overflow,
  style,
  className,
}: CardHeaderProps) {
  const [showOverflow, setShowOverflow] = React.useState<boolean>(false);

  return (
    <div style={style} className={cn(["skc-card-header", className])}>
      {/* Avatar */}
      {avatar && <div className="skc-card-header__avatar">{avatar}</div>}

      {/* Icon */}
      {icon && <div className="skc-card-header__icon">{icon}</div>}

      {/* Content */}
      <div className="skc-card-header__content">
        <h3 className="skc-card-header__title">{title}</h3>
        {subtitle && (
          <span className="skc-card-header__subtitle">{subtitle}</span>
        )}
      </div>

      {/* Overflow */}
      {overflow && (
        <div className="skc-card-header__overflow">
          <Button
            appearance="text"
            icon={<MaterialIcon icon="more_vert" />}
            onClick={() => setShowOverflow(!showOverflow)}
          />
          {
            <Menu
              open={showOverflow}
              onBlur={() => setShowOverflow(false)}
              {...overflow.props}
            >
              {React.Children.map(overflow.props.children, (child) =>
                React.cloneElement(child, {
                  onClick: () => {
                    const { onClick } = child.props;
                    if (onClick) onClick();
                    setShowOverflow(false);
                  },
                })
              )}
            </Menu>
          }
        </div>
      )}
    </div>
  );
}

CardHeader.displayName = "CardHeader";

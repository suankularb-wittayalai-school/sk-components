import "@suankularb-components/css/dist/css/components/header.css";
import { ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";

/**
 * The title of a Section.
 *
 * @param children The text of the Header.
 * @param level The level of the Header. The number corresponds to an HTML header element.
 * @param icon An icon can appear before the text (`children`) in a Header.
 */
const Header: StylableFC<{
  /**
   * Header contains Buttons. You can put as many Buttons inside Header as
   * needed, but the recommended limit is 3.
   *
   * - Always required.
   */
  children: ReactNode;

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
}> = ({ children, level, icon, element, style, className }) => {
  const Element = element || (level ? "h" + level : "h2");

  return (
    <Element className={cn(`skc-header`, className)} style={style}>
      {icon && <span className="skc-header__icon">{icon}</span>}
      <span className="skc-header__text">{children}</span>
    </Element>
  );
};

Header.displayName = "Header";

export default Header;

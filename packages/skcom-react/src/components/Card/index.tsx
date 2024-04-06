import "@suankularb-components/css/dist/css/components/card.css";
import { ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";
import Interactive from "../Interactive";

/**
 * Card is a container for information and actions about a subject. It can be
 * in a list, on its own, or as a link to another page; Card is extremely
 * versatile.
 *
 * To quote Material Design 3, there is no right way to make a Card. However,
 * we have provided some useful props and components to get you started.
 *
 * @param children Card must contain at least 1 JSX element.
 * @param appearance The appearance of the Card. Each appearance puts different amounts of emphasis on the subject.
 * @param direction The flow of the Card’s content, like the CSS property `flex-direction`.
 * @param stateLayerEffect The state layer reacts to changes to the state to signify its interactivity.
 * @param shadowEffect Elevates Card on hover and focus to signify its interactivity.
 * @param onClick The function called when the user interacts with the Card, similar to `onClick` on `<button>`.
 * @param href The URL of the page this Card leads to, similar to `href` on `<a>`.
 */
const Card: StylableFC<{
  /**
   * Card must contain at least 1 JSX element; here is a list of SKCom
   * components that work well with Card: Card Header, Card Content, Chip List,
   * Actions.
   *
   * - Required.
   */
  children: ReactNode;

  /**
   * The appearance of the Card.
   *
   * - Each appearance puts different amounts of emphasis on the subject. From
   *   most to least emphasis, a Card can be outlined, elevated, and filled.
   * - Must be `outlined`, `elevated`, or `filled`, from highest to lowest
   *   emphasis.
   * - Always required.
   */
  appearance: "outlined" | "elevated" | "filled";

  /**
   * The flow of the Card’s content, like the CSS property `flex-direction`.
   * The default is `column`.
   *
   * - Must be `row` or `column`.
   * - Optional.
   */
  direction?: "row" | "column";

  /**
   * In interactive components like Button, the state layer reacts to changes
   * to the state to signify its interactivity. For example, a Button’s state
   * layer turns up its opacity on hover.
   *
   * - This effect can be enabled on Card as well, letting the user know that
   *   this Card is interactive.
   * - Optional.
   */
  stateLayerEffect?: boolean;

  /**
   * Elevates Card on hover and focus to signify its interactivity.
   *
   * - Optional.
   */
  shadowEffect?: boolean;

  /**
   * The function called when the user interacts with the Card, similar to
   * `onClick` on `<button>`.
   */
  onClick?: () => any;

  /**
   * The URL of the page this Card leads to, similar to `href` on `<a>`.
   */
  href?: string;
}> = ({
  children,
  style,
  appearance,
  direction = "column",
  stateLayerEffect = false,
  shadowEffect,
  onClick,
  href,
  element,
  className,
}) => (
  <Interactive
    stateLayerEffect={stateLayerEffect}
    rippleEffect={stateLayerEffect}
    shadowEffect={shadowEffect}
    href={href}
    onClick={onClick}
    element={element}
    style={style}
    className={cn(
      "skc-card",
      {
        outlined: "skc-card--outlined",
        elevated: "skc-card--elevated",
        filled: "skc-card--filled",
      }[appearance],
      {
        row: "skc-card--row",
        column: "skc-card--column",
      }[direction],
      className,
    )}
  >
    {children}
  </Interactive>
);

Card.displayName = "Card";

export default Card;

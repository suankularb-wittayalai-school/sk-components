// External libraries
import * as React from "react";

// Internal components
import { Interactive } from "../Interactive";

// Types
import { AdaptToMotionProps, SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/card.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link Card}.
 */
export interface CardProps extends SKComponent {
  /**
   * Card must contain at least 1 JSX element; here is a list of SKCom
   * components that work well with Card: Card Header, Card Media, Card
   * Content, Chip List, Actions.
   *
   * - Required.
   */
  children: React.ReactNode;

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
   * @deprecated Use the `element` prop instead.
   */
  layoutID?: any;

  /**
   * The function called when the user interacts with the Card, similar to
   * `onClick` on `<button>`.
   *
   * - Incompatible with `href`.
   */
  onClick?: () => any;

  /**
   * The URL of the page this Card leads to, similar to `href` on `<a>`.
   *
   * - Incompatible with `onClick`.
   */
  href?: string;

  /**
   * @deprecated Use the `element` prop instead.
   */
  buttonAttr?: AdaptToMotionProps<React.ComponentProps<"button">>;

  /**
   * @deprecated Use the `element` prop instead.
   */
  aAttr?: AdaptToMotionProps<React.ComponentProps<"a">>;
}

/**
 * Card is a container for information and actions about a subject. It can be
 * in a list, on its own, or as a link to another page; Card is extremely versatile.
 *
 * To quote Material Design 3, there is no right way to make a Card. However,
 * we have provided some useful props and components to get you started.
 *
 * @see {@link https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing#heading=h.699tcnx6hbn3 SKCom documentation}
 *
 * @param children Card must contain at least 1 JSX element.
 * @param appearance The appearance of the Card. Each appearance puts different amounts of emphasis on the subject.
 * @param direction The flow of the Card’s content, like the CSS property `flex-direction`.
 * @param stateLayerEffect The state layer reacts to changes to the state to signify its interactivity. This effect can be enabled on Card as well.
 * @param shadowEffect Elevates Card on hover and focus to signify its interactivity.
 * @param onClick The function called when the user interacts with the Card, similar to `onClick` on `<button>`.
 * @param href The URL of the page this Card leads to, similar to `href` on `<a>`.
 */
export function Card({
  children,
  style,
  appearance,
  direction,
  stateLayerEffect,
  shadowEffect,
  onClick,
  href,
  element,
  className,
}: CardProps) {
  return (
    <Interactive
      // `stateLayerEffect` and `rippleEffect` are enabled by default in
      // Interactive, but not in Card
      stateLayerEffect={
        stateLayerEffect === undefined ? false : stateLayerEffect
      }
      rippleEffect={stateLayerEffect === undefined ? false : stateLayerEffect}
      shadowEffect={shadowEffect}
      href={href}
      onClick={onClick}
      element={element}
      style={style}
      className={cn([
        "skc-card",
        appearance === "outlined"
          ? "skc-card--outlined"
          : appearance === "elevated"
          ? "skc-card--elevated"
          : appearance === "filled"
          ? "skc-card--filled"
          : undefined,
        direction === "row" ? "skc-card--row" : "skc-card--column",
        className,
      ])}
    >
      {children}
    </Interactive>
  );
}

Card.displayName = "Card";

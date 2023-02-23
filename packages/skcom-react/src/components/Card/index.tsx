// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

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
   * An ID for transitioning to and from this Card. See Framer Motion’s
   * documentation on
   * {@link https://www.framer.com/docs/layout-group/ LayoutGroup}
   * for more details.
   *
   * - Must be unique within the page.
   * - Optional.
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
   * Change the underlying element from `<a>` to a custom element. This is
   * useful when a framework you’re using has a Link component for routing. An
   * example is `next/link` from Next.js.
   *
   * - Incompatible with `onClick`.
   */
  element?: ({
    children,
    ref,
    style,
    className,
    href,
    onClick,
    onMouseDown,
    onKeyDown,
  }: {
    children: React.ReactNode;
    ref: React.MutableRefObject<any>;
    style?: React.CSSProperties;
    className: any;
    href: string;
    onClick: (event: React.MouseEvent) => void;
    onMouseDown: (event: React.MouseEvent) => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
  }) => JSX.Element | null;
}

/**
 * Card is a container for information and actions about a subject. It can be
 * in a list, on its own, or as a link to another page; Card is extremely versatile.
 *
 * To quote Material Design 3, there is no right way to make a Card. However,
 * we have provided some useful props and components to get you started.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.699tcnx6hbn3 SKCom documentation}
 *
 * @param children Card must contain at least 1 JSX element
 * @param appearance The appearance of the Card. Each appearance puts different amounts of emphasis on the subject.
 * @param direction The flow of the Card’s content, like the CSS property `flex-direction`.
 * @param stateLayerEffect The state layer reacts to changes to the state to signify its interactivity. This effect can be enabled on Card as well.
 * @param shadowEffect Elevates Card on hover and focus to signify its interactivity.
 * @param layoutID An ID for transitioning to and from this Card.
 * @param onClick The function called when the user interacts with the Card, similar to `onClick` on `<button>`.
 * @param href The URL of the page this Card leads to, similar to `href` on `<a>`.
 * @param element Change the underlying element from `<a>` to a custom element.
 */
export function Card({ children, style, className }: CardProps) {
  return (
    <div style={style} className={cn(["skc-card", className])}>
      {children}
    </div>
  );
}

Card.displayName = "Card";

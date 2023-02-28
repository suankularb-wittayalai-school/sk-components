// External libraries
import { motion } from "framer-motion";
import * as React from "react";

// Internal components
import { ListItemContentProps } from "../ListItemContent";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/list-item.css";

// Utilities
import { useRipple } from "../../utils/animation";
import { cn } from "../../utils/className";
import { kebabify } from "../../utils/format";

/**
 * The number of lines a List Item can contain.
 */
type ListItemLines = 1 | 2 | 3;

/**
 * Props for {@link ListItem List Item}.
 */
export interface ListItemProps extends SKComponent {
  /**
   * The content of a List Item consists of the leading section, the content
   * section, and the trailing section.
   *
   * - Any components placed before List Item Content is put into the leading
   *   section, and any after is put into the trailing section.
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * The vertical alignment of the List Item’s content.
   *
   * - Must be `top`, `center`, or `bottom`.
   * - Always required.
   */
  align: "top" | "center" | "bottom";

  /**
   * The number of lines contained by the List Item. The height is set from this prop.
   *
   * - Must be an integer (or a list of 4 integers, each corresponding to a breakpoint) from 1 to 3.
   * - Always required.
   */
  lines:
    | ListItemLines
    | [ListItemLines, ListItemLines, ListItemLines, ListItemLines];

  /**
   * In interactive components like Button, the state layer reacts to changes
   * to the state to signify its interactivity. For example, a Button’s state
   * layer turns up its opacity on hover.
   *
   * - This effect can be enabled on List Item as well, letting the user know
   *   that this List Item is interactive.
   * - Optional.
   */
  stateLayerEffect?: boolean;

  /**
   * The function called when the user interacts with the List Item, similar to `onClick` on `<button>`.
   *
   * - If this is defined, a state layer is added.
   * - Incompatible with `href`.
   * - Optional.
   */
  onClick?: () => any;

  /**
   * The URL of the page this List Item leads to, similar to `href` on `<a>`.
   *
   * - If this is defined, a state layer is added.
   * - Incompatible with `onClick`.
   * - Optional.
   */
  href?: string;

  /**
   * Change the underlying element from `<a>` to a custom element. This is useful when a framework you’re using has a Link component for routing. An example is `next/link` from Next.js.
   *
   * - Incompatible with `onClick`.
   * - Optional.
   */
  element?: ({
    children,
    ref,
    style,
    className,
    href,
    onMouseDown,
    onKeyDown,
  }: {
    children: React.ReactNode;
    ref?: React.MutableRefObject<any>;
    style?: React.CSSProperties;
    className: any;
    href: string;
    onMouseDown?: (event: React.MouseEvent) => void;
    onKeyDown?: (event: React.KeyboardEvent) => void;
  }) => JSX.Element | null;
}

/**
 * An item inside a List.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.33dks77m5ey9 SKCom documentation}
 *
 * @param children The content of a List Item consists of the leading section, the content section, and the trailing section.
 * @param align The vertical alignment of the List Item’s content.
 * @param lines The number of lines contained by the List Item.
 * @param stateLayerEffect The state layer reacts to changes to the state to signify its interactivity. This effect can be enabled on List item as well.
 * @param onClick The function called when the user interacts with the List Item, similar to `onClick` on `<button>`.
 * @param href The URL of the page this List Item leads to, similar to `href` on `<a>`.
 * @param element Change the underlying element from `<a>` to a custom element.
 */
export function ListItem({
  children,
  align,
  lines,
  stateLayerEffect,
  onClick,
  href,
  element: Element,
  style,
  className,
}: ListItemProps) {
  // Ripple setup
  const itemRef = React.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(itemRef);

  // Accessibility
  let itemID: string | undefined;
  React.Children.forEach(children, (child) => {
    // Find the List Item Content (if exists)
    if ((child as JSX.Element).type.displayName === "ListItemContent") {
      // Grab `title` and `alt`
      const { title, alt } = (child as JSX.Element)
        .props as ListItemContentProps;

      // Only use `title` if it is a string, otherwise use `alt`
      itemID = `list-item-${kebabify(
        (typeof title === "string" ? title : alt)!
      )}`;
    }
  });

  // Props
  const props = {
    ref: itemRef,
    "aria-labelledby": itemID,
    style,
    className: cn([
      "skc-list-item",
      align === "top"
        ? "skc-list-item--top"
        : align === "center"
        ? "skc-list-item--center"
        : align === "bottom"
        ? "skc-list-item--bottom"
        : undefined,
      lines === 1
        ? "skc-list-item--1-line"
        : lines === 2
        ? "skc-list-item--2-lines"
        : lines === 3
        ? "skc-list-item--3-lines"
        : undefined,
      stateLayerEffect && "skc-list-item--state-layer",
      className,
    ]),
    ...rippleListeners,
  } satisfies JSX.IntrinsicElements["button" | "a" | "div"];

  // Content
  const content = (
    <>
      {children}
      {stateLayerEffect && (
        <motion.span
          initial={{ scale: 0, opacity: 0.36 }}
          animate={rippleControls}
          className="skc-list-item__ripple"
          style={rippleStyle}
        />
      )}
    </>
  );

  return (
    // Render with `element`, `<a>`, or `<button>` if functionality passed in
    href || onClick || stateLayerEffect ? (
      <li aria-labelledby={itemID}>
        {
          // Render with `element` if defined
          href && Element ? (
            <Element {...props} href={href}>
              {content}
            </Element>
          ) : // Render an `<a>` if link passed in
          href ? (
            <a {...props} href={href}>
              {content}
            </a>
          ) : (
            // Otherwise, render a `<button>`
            <button {...{ ...props, onClick }} type="button">
              {content}
            </button>
          )
        }
      </li>
    ) : (
      // If this Item has no functionality, just render a `<li>`
      <li {...props}>{content}</li>
    )
  );
}

ListItem.displayName = "ListItem";

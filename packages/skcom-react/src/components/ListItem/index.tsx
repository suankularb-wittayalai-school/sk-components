// External libraries
import * as React from "react";

// Internal components
import { Interactive } from "../Interactive";
import { ListItemContentProps } from "../ListItemContent";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/list-item.css";

// Utilities
import { cn } from "../../utils/className";
import { matchDisplayName } from "../../utils/displayName";
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
}

/**
 * An item inside a List.
 *
 * @see {@link https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing#heading=h.33dks77m5ey9 SKCom documentation}
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
  element,
  style,
  className,
}: ListItemProps) {
  // Accessibility
  let itemID: string | undefined;
  React.Children.forEach(children, (child) => {
    // Find the List Item Content (if exists)
    if (matchDisplayName(child, "ListItemContent")) {
      // Grab `title` and `alt`
      const { title, alt } = (child as JSX.Element)
        .props as ListItemContentProps;

      // Only use `title` if it is a string, otherwise use `alt`
      itemID = `list-item-${kebabify(
        (typeof title === "string" ? title : alt)!
      )}`;
    }
  });

  return (
    <li aria-labelledby={itemID}>
      <Interactive
        stateLayerEffect={Boolean(href || onClick || stateLayerEffect)}
        rippleEffect={Boolean(href || onClick || stateLayerEffect)}
        href={href}
        onClick={onClick}
        element={
          element ||
          (href ? "a" : onClick || stateLayerEffect ? "button" : "div")
        }
        style={style}
        className={cn([
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
        ])}
      >
        {children}
      </Interactive>
    </li>
  );
}

ListItem.displayName = "ListItem";

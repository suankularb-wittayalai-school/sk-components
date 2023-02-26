// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/list-item.css";

// Utilities
import { cn } from "../../utils/className";

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
  element?: JSX.Element;
}

/**
 * An item inside a List.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.33dks77m5ey9 SKCom documentation}
 *
 * @param children The content of a List Item consists of the leading section, the content section, and the trailing section.
 * @param align The vertical alignment of the List Item’s content.
 * @param lines The number of lines contained by the List Item.
 * @param onClick The function called when the user interacts with the List Item, similar to `onClick` on `<button>`.
 * @param href The URL of the page this List Item leads to, similar to `href` on `<a>`.
 * @param element Change the underlying element from `<a>` to a custom element.
 */
export function ListItem({
  children,
  align,
  lines,
  onClick,
  href,
  element,
  style,
  className,
}: ListItemProps) {
  return (
    <div
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
        className,
      ])}
    >
      {children}
    </div>
  );
}

ListItem.displayName = "ListItem";

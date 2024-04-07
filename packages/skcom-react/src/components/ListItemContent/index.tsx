// External libraries
import { dash } from "radash";
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/list-item-content.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link ListItemContent List Item Content}.
 */
export interface ListItemContentProps extends SKComponent {
  /**
   * Small text on top of the title text.
   *
   * - Optional.
   */
  overline?: string | JSX.Element;

  /**
   * The main text of the List Item Content.
   *
   * - Always required.
   */
  title: string | JSX.Element;

  /**
   * A description supplementing the title text.
   *
   * - Optional.
   */
  desc?: string | JSX.Element;

  /**
   * A description of the List Item Content for screen readers, similar to
   * `alt` on `<img>`.
   *
   * - Required if `title` is a JSX Element, as it is used to generate the ID
   *   crucial for accessibility.
   */
  alt?: string;
}

/**
 * The text content of a List Item.
 *
 * @param overline Small text on top of the title text.
 * @param title The main text of the List Item Content.
 * @param desc A description supplementing the title text.
 * @param alt A description of the List Item Content for screen readers, similar to `alt` on `<img>`.
 */
export function ListItemContent({
  overline,
  title,
  desc,
  alt,
  element: Element = "div",
  style,
  className,
}: ListItemContentProps) {
  return (
    <Element style={style} className={cn(["skc-list-item-content", className])}>
      {/* Overline */}
      {overline && (
        <span className="skc-list-item-content__overline">{overline}</span>
      )}

      {/* Title */}
      <span
        id={`list-item-${dash((typeof title === "string" ? title : alt)!)}`}
        aria-label={alt}
        className="skc-list-item-content__title"
      >
        {title}
      </span>

      {/* Description */}
      {desc && <span className="skc-list-item-content__desc">{desc}</span>}
    </Element>
  );
}

ListItemContent.displayName = "ListItemContent";

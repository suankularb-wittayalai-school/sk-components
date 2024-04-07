// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/table-head.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link TableHead Table Head}.
 */
export interface TableHeadProps extends SKComponent {
  /**
   * Table Head has the same behaviour as `<thead>`.
   *
   * - Must consist of Table Row(s), which must consist of Table Cells with the
   *   `header` enabled.
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * If the Table Head stays put on scroll.
   *
   * - Table Head will be fixed to the top of the parent Table, not the screen.
   * - Only effective if `height` is set on the parent Table.
   * - Optional.
   */
  fixed?: boolean;
}

/**
 * The head area of a Table.
 *
 * @param children Table Head has the same behaviour as `<thead>`.
 * @param fixed If the Table Head stays put on scroll.
 */
export function TableHead({
  children,
  fixed,
  element: Element = "thead",
  style,
  className,
}: TableHeadProps) {
  return (
    <Element
      style={style}
      className={cn([
        "skc-table-head",
        fixed && "skc-table-head--fixed",
        className,
      ])}
    >
      {children}
    </Element>
  );
}

TableHead.displayName = "TableHead";

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
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.7y7xcyou1za9 SKCom documentation}
 *
 * @param children Table Head has the same behaviour as `<thead>`.
 * @param fixed If the Table Head stays put on scroll.
 */
export function TableHead({
  children,
  fixed,
  style,
  className,
}: TableHeadProps) {
  return (
    <thead
      style={style}
      className={cn([
        "skc-table-head",
        fixed && "skc-table-head--fixed",
        className,
      ])}
    >
      {children}
    </thead>
  );
}

TableHead.displayName = "TableHead";

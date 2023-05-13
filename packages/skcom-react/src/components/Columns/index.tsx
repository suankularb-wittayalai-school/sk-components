// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/columns.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link Columns}.
 */
export interface ColumnsProps extends SKComponent {
  /**
   * The content to be divided.
   *
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * Number of columns.
   *
   * - Must be an integer from 2, 3, 4, 6, or 12.
   * - Always required.
   */
  columns: 2 | 3 | 4 | 6 | 12;
}

/**
 * Columns break up content in larger screens into multiple columns, so as to
 * make the content easier to read. On smaller screens, Columns automatically
 * collapse columns into one column.
 *
 * The columns inside of Columns are based on the layout grid, which is a grid
 * system that keeps elements of a page aligned to a common grid
 * ({@link https://m3.material.io/foundations/adaptive-design/large-screens/overview#55fc0118-1fa3-48a3-b805-169bb58e6e78 M3 reference};
 * {@link https://m2.material.io/design/layout/responsive-layout-grid.html#columns-gutters-and-margins M2 reference}).
 *
 * @see {@link https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing#heading=h.j3ziatuuxd12 SKCom documentation}
 *
 * @param children The content to be divided.
 * @param columns Number of columns.
 */
export function Columns({
  children,
  columns,
  element,
  style,
  className,
}: ColumnsProps) {
  return React.createElement(
    element || "div",
    {
      style,
      className: cn([
        "skc-columns",
        columns === 2
          ? "skc-columns--2"
          : columns === 3
          ? "skc-columns--3"
          : columns === 4
          ? "skc-columns--4"
          : columns === 6
          ? "skc-columns--6"
          : columns === 12
          ? "skc-columns--12"
          : undefined,
        className,
      ]),
    },
    children
  );
}

Columns.displayName = "Columns";

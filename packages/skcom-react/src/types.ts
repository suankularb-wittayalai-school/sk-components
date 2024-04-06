import { ColumnDef } from "@tanstack/react-table";
import {
  CSSProperties,
  ComponentProps,
  FC,
  FunctionComponent,
  ReactHTML,
} from "react";
import TableCell from "./components/TableCell";

export type StylableFC<T extends object = {}> = FC<
  T & {
    /**
     * The element of the most relevant underlying element.
     *
     * - Optional.
     */
    element?: keyof ReactHTML | FunctionComponent<any>;

    /**
     * `className` on the most relevant underlying attribute.
     *
     * - Optional.
     */
    className?: string;

    /**
     * `style` on the most relevant underlying attribute.
     *
     * - Optional.
     */
    style?: CSSProperties;
  }
>;

/**
 * A language code supported by SK Components.
 */
export type LangCode = "en-US" | "th";

/**
 * An extended version of Tanstack Table’s `ColumnDef`, used to define a
 * column’s properties.
 */
export type DataTableColumnDef<T = any> = ColumnDef<T> &
  Partial<{
    /**
     * Props for the header Table Cell.
     *
     * @see {@link TableCell}
     */
    thAttr: Partial<ComponentProps<typeof TableCell>>;

    /**
     * Props for the content Table Cell.
     *
     * @see {@link TableCell}
     */
    tdAttr:
      | Partial<ComponentProps<typeof TableCell>>
      | ((row: T) => Partial<ComponentProps<typeof TableCell>>);

    /**
     * A custom render function.
     *
     * @param row The data passed in for each row.
     * @returns The Table Cell content, replaces the default.
     */
    render: (row: T) => string | JSX.Element | null;

    /**
     * The message shown when there is no data for a Table Cell.
     */
    noDataMsg: string | JSX.Element;
  }>;

export type AdaptToMotionProps<T extends object> = Omit<
  T,
  "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag" | "ref"
>;

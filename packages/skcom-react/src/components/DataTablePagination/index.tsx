// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/data-table-pagination.css";

// Utilities
import { cn } from "../../utils/className";
import { Button } from "../Button";
import { MaterialIcon } from "../MaterialIcon";

/**
 * Props for {@link DataTablePagination Data Table Pagination}.
 */
export interface DataTablePaginationProps extends SKComponent {
  /**
   * The maximum number of rows shown on the Data Table at a time.
   *
   * - Must be a non-negative integer.
   * - Always required.
   */
  rowsPerPage: number;

  /**
   * The total number of rows of data, including both those currently shown and
   * not shown on the Data Table.
   *
   * - Must be a non-negative integer.
   * - Always required.
   */
  totalRows: number;

  /**
   * Allows for translation of the page indicator and accessibility labels.
   *
   * - Must be `th` or `en-US`, as SKCom currently only support those 2
   *   languages.
   * - Optional.
   */
  locale?: "en-US" | "th";

  /**
   * Triggers when the user changes the page.
   *
   * - The following is passed onto the function: the current page number, the
   *   start index, and the end index.
   * - Optional.
   *
   * @param page The current page number, starting from 1.
   * @param start The start index of the range of data to pull from for this page.
   * @param end The end index of the range of data to pull from for this page.
   */
  onChange?: (page: number, start: number, end: number) => any;
}

/**
 * At the footer of a Data Table, Data Table Pagination provides controls for
 * paginating the Data Table data, including the current rows and navigating to
 * forward and backward on pages.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.1ho4fokc2sqb SKCom documentation}
 *
 * @param rowsPerPage The maximum number of rows shown on the Data Table at a time.
 * @param totalRows The total number of rows of data, including both those currently shown and not shown on the Data Table.
 * @param locale Allows for translation of the page indicator and accessibility labels.
 * @param onChange Triggers when the user changes the page.
 */
export function DataTablePagination({
  rowsPerPage,
  totalRows,
  locale,
  onChange,
  style,
  className,
}: DataTablePaginationProps) {
  const [page, setPage] = React.useState<number>(1);
  const maxPage = Math.ceil(totalRows / rowsPerPage);

  return (
    <div style={style} className={cn(["skc-data-table-pagination", className])}>
      <span className="skc-data-table-pagination__label">
        {`${page}-${page + rowsPerPage - 1} ${
          locale === "th" ? "จาก" : "of"
        } ${totalRows}`}
      </span>
      <div className="skc-data-table-pagination__controls">
        {/* Skip to first */}
        <Button
          appearance="text"
          icon={<MaterialIcon icon="first_page" />}
          disabled={page === 1}
          onClick={() => setPage(1)}
        />
        {/* Previous */}
        <Button
          appearance="text"
          icon={<MaterialIcon icon="chevron_left" />}
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        />
        {/* Next */}
        <Button
          appearance="text"
          icon={<MaterialIcon icon="chevron_right" />}
          disabled={page === maxPage}
          onClick={() => setPage(page + 1)}
        />
        {/* Skip to last */}
        <Button
          appearance="text"
          icon={<MaterialIcon icon="last_page" />}
          disabled={page === maxPage}
          onClick={() => setPage(maxPage)}
        />
      </div>
    </div>
  );
}

DataTablePagination.displayName = "DataTablePagination";

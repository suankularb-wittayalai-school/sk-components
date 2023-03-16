// External libraries
import { motion } from "framer-motion";
import * as React from "react";

// Internal components
import { Button } from "../Button";
import { MaterialIcon } from "../MaterialIcon";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/data-table-pagination.css";

// Utilities
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";

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
  const { duration, easing } = useAnimationConfig();

  const [page, setPage] = React.useState<number>(1);
  const [maxPage, setMaxPage] = React.useState<number>(
    Math.ceil(totalRows / rowsPerPage)
  );
  React.useEffect(() => {
    const newMaxPage = Math.ceil(totalRows / rowsPerPage);
    setMaxPage(newMaxPage);
    if (newMaxPage < page) setPage(Math.max(newMaxPage, 1));
  }, [totalRows, rowsPerPage]);

  const range = {
    start: totalRows ? rowsPerPage * (page - 1) + 1 : 0,
    end: Math.min(rowsPerPage * page, totalRows),
  };

  React.useEffect(
    () => onChange && onChange(page, range.start - 1, range.end - 1),
    [page]
  );

  return (
    <motion.div
      layout
      transition={transition(duration.medium4, easing.standard)}
      style={style}
      className={cn(["skc-data-table-pagination", className])}
    >
      <span
        aria-label={
          locale === "th"
            ? `แถวที่ ${range.start} ถึง ${range.end} จากทั้งหมด ${totalRows} แถว`
            : `Rows ${range.start} to ${range.end}, from a total of ${totalRows} rows`
        }
        className="skc-data-table-pagination__label"
      >
        {`${range.start}-${range.end} ${
          locale === "th" ? "จาก" : "of"
        } ${totalRows}`}
      </span>
      <div className="skc-data-table-pagination__controls">
        {/* Skip to first */}
        <Button
          appearance="text"
          icon={<MaterialIcon icon="first_page" />}
          alt={locale === "th" ? "ไปหน้าแรก" : "Go to last page"}
          disabled={page === 1}
          onClick={() => setPage(1)}
        />
        {/* Previous */}
        <Button
          appearance="text"
          icon={<MaterialIcon icon="chevron_left" />}
          alt={locale === "th" ? "หน้าที่แล้ว" : "Previous page"}
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        />
        {/* Next */}
        <Button
          appearance="text"
          icon={<MaterialIcon icon="chevron_right" />}
          alt={locale === "th" ? "หน้าต่อไป" : "Next page"}
          disabled={page === maxPage}
          onClick={() => setPage(page + 1)}
        />
        {/* Skip to last */}
        <Button
          appearance="text"
          icon={<MaterialIcon icon="last_page" />}
          alt={locale === "th" ? "ไปหน้าสุดท้าย" : "Go to last page"}
          disabled={page === maxPage}
          onClick={() => setPage(maxPage)}
        />
      </div>
    </motion.div>
  );
}

DataTablePagination.displayName = "DataTablePagination";

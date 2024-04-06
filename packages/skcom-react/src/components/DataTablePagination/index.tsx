import "@suankularb-components/css/dist/css/components/data-table-pagination.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LangCode, StylableFC } from "../../types";
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";
import Button from "../Button";
import MaterialIcon from "../MaterialIcon";

/**
 * At the footer of a Data Table, Data Table Pagination provides controls for
 * paginating the Data Table data, including the current rows and navigating to
 * forward and backward on pages.
 *
 * @param rowsPerPage The maximum number of rows shown on the Data Table at a time.
 * @param totalRows The total number of rows of data, including both those currently shown and not shown on the Data Table.
 * @param locale Allows for translation of the page indicator and accessibility labels.
 * @param onChange Triggers when the user changes the page.
 */
const DataTablePagination: StylableFC<{
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
  locale?: LangCode;

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

  /**
   * This prop is not supported by this component.
   */
  element?: never;
}> = ({
  rowsPerPage,
  totalRows,
  locale = "en-US",
  onChange,
  style,
  className,
}) => {
  const { duration, easing } = useAnimationConfig();

  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(Math.ceil(totalRows / rowsPerPage));
  useEffect(() => {
    const newMaxPage = Math.ceil(totalRows / rowsPerPage);
    setMaxPage(newMaxPage);
    if (newMaxPage < page) setPage(Math.max(newMaxPage, 1));
  }, [totalRows, rowsPerPage]);

  const range = {
    start: totalRows ? rowsPerPage * (page - 1) + 1 : 0,
    end: Math.min(rowsPerPage * page, totalRows),
  };

  const strings = {
    start: range.start.toLocaleString(locale),
    end: range.end.toLocaleString(locale),
    total: totalRows.toLocaleString(locale),
  };

  useEffect(
    () => onChange && onChange(page, range.start - 1, range.end - 1),
    [page],
  );

  return (
    <motion.div
      layout
      transition={transition(duration.medium4, easing.standard)}
      style={style}
      className={cn(`skc-data-table-pagination`, className)}
    >
      <span
        aria-label={
          locale === "th"
            ? `แถวที่ ${strings.start} ถึง ${strings.end} จากทั้งหมด ${strings.total} แถว`
            : `Rows ${strings.start} to ${strings.end}, from a total of ${strings.total} rows`
        }
        className="skc-data-table-pagination__label"
      >
        {locale === "th"
          ? `${strings.start}-${strings.end} จาก ${strings.total}`
          : `${strings.start}-${strings.end} of ${strings.total}`}
      </span>
      <div className="skc-data-table-pagination__controls">
        {/* Skip to first */}
        <Button
          appearance="text"
          icon={<MaterialIcon icon="first_page" />}
          alt={{ "en-US": "Go to first page", th: "ไปหน้าแรก" }[locale]}
          disabled={page === 1}
          onClick={() => setPage(1)}
        />
        {/* Previous */}
        <Button
          appearance="text"
          icon={<MaterialIcon icon="chevron_left" />}
          alt={{ "en-US": "Previous page", th: "หน้าที่แล้ว" }[locale]}
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        />
        {/* Next */}
        <Button
          appearance="text"
          icon={<MaterialIcon icon="chevron_right" />}
          alt={{ "en-US": "Next page", th: "หน้าต่อไป" }[locale]}
          disabled={page === maxPage}
          onClick={() => setPage(page + 1)}
        />
        {/* Skip to last */}
        <Button
          appearance="text"
          icon={<MaterialIcon icon="last_page" />}
          alt={{ "en-US": "Go to last page", th: "ไปหน้าสุดท้าย" }[locale]}
          disabled={page === maxPage}
          onClick={() => setPage(maxPage)}
        />
      </div>
    </motion.div>
  );
};

DataTablePagination.displayName = "DataTablePagination";

export default DataTablePagination;

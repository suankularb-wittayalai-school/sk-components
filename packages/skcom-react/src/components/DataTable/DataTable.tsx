// Modules
import { useEffect } from "react";
import { useTable, useGlobalFilter, Column } from "react-table";

// Components
import Table from "../Table/Table";

// Types
import { TableProps } from "../Table/Table";

export interface DataTableProps extends Omit<TableProps, "children"> {
  columns: Column<object>[];
  data: object[];
  globalFilter?: string;
}

const DataTable = ({
  columns,
  data,
  globalFilter,
  type,
  width,
  className,
  style,
}: DataTableProps): JSX.Element => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // @ts-ignore
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );

  useEffect(() => setGlobalFilter(globalFilter), [globalFilter]);

  return (
    <Table {...{ type, width, className, style }} attr={getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default DataTable;

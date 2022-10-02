// Components
import Table from "../Table/Table";

// Types
import { TableProps } from "../Table/Table";

export interface DataTableProps extends Omit<TableProps, "children"> {
  data: any[];
}

const DataTable = ({ data, type, width, className, style }: DataTableProps): JSX.Element => (
  <Table {...{ type, width, className, style }}>
    <p>TODO</p>
  </Table>
);

export default DataTable;

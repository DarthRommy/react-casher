import type { FC } from "react";
import useBarcodes from "../../../lib/data/useBarcodes";
import { table, tableRow, wrapper } from "../../../styles/components/table.css";

const Table: FC = () => {
  const { barcodes } = useBarcodes();

  const rows = barcodes.map(({ code, count, label, price }) => (
    <tr className={tableRow} key={`row_${code}`}>
      <th>{label}</th>
      <td>#{code}</td>
      <td>¥{price.toLocaleString()}</td>
      <td>x{count}</td>
      <td>¥{(count * price).toLocaleString()}</td>
    </tr>
  ));

  return (
    <div className={wrapper}>
      <table className={table}>
        <thead>
          <tr className={tableRow} key={`row_header`}>
            <th>Label</th>
            <th>Code</th>
            <th>Price</th>
            <th>Count</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Table;

import type { FC } from "react";
import { BiBarcode } from "react-icons/bi";
import useSales from "../../lib/data/sales";
import {
  answer,
  icon,
  question,
  totalArea,
  totalContext,
  wrapper
} from "../../styles/components/top.css";

const Top: FC = () => {
  const sales = useSales();
  return (
    <>
      <div className={wrapper}>
        <p className={question}>How To Use?</p>
        <h1 className={answer}>Just Read Barcodes.</h1>
        <div className={totalArea}>
          <div className={icon}>
            <BiBarcode />
          </div>
          <div className={totalContext}>
            <p>Current Sales</p>
            <h1>¥{sales}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;

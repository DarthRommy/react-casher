import classNames from "classnames";
import dynamic from "next/dynamic";
import type { FC } from "react";
import { useState } from "react";
import useBarcodes from "../../../lib/data/useBarcodes";
import {
  addNew,
  addNewOpened,
  container,
  context,
  header,
  message,
  message1,
  message2,
  wrapper
} from "../../../styles/components/showcase.css";
import MaterialIcon from "../../general/MIcon";
import Table from "./Table";

const CreateNew = dynamic(() => import("./CreateNew"));

const Showcase: FC = () => {
  const { barcodes } = useBarcodes();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={wrapper}>
      <div className={context}>
        <h1 className={header}>Table</h1>
        {barcodes.length > 0 && (
          <button
            className={classNames(addNew, {
              [addNewOpened]: isOpen,
            })}
            onClick={toggleOpen}
          >
            <MaterialIcon type="outlined">add_circle_outline</MaterialIcon>
            {isOpen ? "Close" : "Add New"}
          </button>
        )}
      </div>
      {isOpen && (
        <div className={container}>
          <CreateNew />
        </div>
      )}
      <div className={container}>
        {barcodes.length > 0 ? (
          <Table />
        ) : (
          <>
            <div className={message}>
              <p className={message1}>No data found.</p>
              <h1 className={message2}>You want some?</h1>
            </div>
            <CreateNew />
          </>
        )}
      </div>
    </div>
  );
};

export default Showcase;

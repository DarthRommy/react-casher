import type { FC } from "react";
import { useState } from "react";
import type { Barcode } from "../../../lib/data/types";
import useBarcodes from "../../../lib/data/useBarcodes";
import str2Number from "../../../lib/hooks/strToNumber";
import {
  actionArea,
  addNew,
  container,
  grid
} from "../../../styles/components/createnew.css";
import MaterialIcon from "../../general/MIcon";
import NewInput from "./NewInput";

const CreateNew: FC = () => {
  const [label, setLabel] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState("");

  const { addBarcode, findBarcode } = useBarcodes();

  const notEmpty = !!label && !findBarcode(code) && str2Number(price) !== null;

  const onClick = () => {
    const newValue: Barcode = {
      label,
      code,
      price: str2Number(price),
      count: 0,
    };
    addBarcode(newValue);
    setLabel("");
    setCode("");
    setPrice("");
  };

  return (
    <div className={container}>
      <div className={grid}>
        <NewInput
          label="Label"
          value={label}
          placeholder="Label Here"
          onChange={e => setLabel(e.target.value)}
        />
        <NewInput
          label="Code"
          value={code}
          placeholder="Code Here"
          onChange={e => setCode(e.target.value)}
        />
        <NewInput
          label="Price"
          value={price}
          placeholder="Price Here"
          onChange={e => setPrice(e.target.value)}
        />
      </div>
      <div className={actionArea}>
        <button className={addNew} disabled={!notEmpty} onClick={onClick}>
          <MaterialIcon type="outlined">playlist_add</MaterialIcon>
          Add New
        </button>
      </div>
    </div>
  );
};

export default CreateNew;

import classNames from "classnames";
import type { ChangeEvent, FC, FormEvent } from "react";
import { useState } from "react";
import useBarcodes from "../../lib/data/useBarcodes";
import {
  actionClear,
  errorInput,
  input,
  inputField
} from "../../styles/components/input.css";
import MaterialIcon from "../general/MIcon";

const Input: FC = () => {
  const [code, setCode] = useState("");
  const [isValid, setIsValid] = useState(true);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const clearBarcode = () => {
    setCode("");
  };

  const { readBarcode, findBarcode } = useBarcodes();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (findBarcode(code)) {
      readBarcode(code);
      setCode("");
      setIsValid(true);
    } else {
      setCode("");
      setIsValid(false);
    }
    e.preventDefault();
  };

  return (
    <form className={inputField} onSubmit={onSubmit}>
      <input
        className={classNames(input, { [errorInput]: !isValid })}
        value={code}
        onChange={onChange}
        type="text"
        placeholder={isValid ? "Any code here" : "Invalid value"}
        autoFocus
      />
      <button onClick={clearBarcode} className={actionClear} type="button">
        <MaterialIcon type="outlined">clear</MaterialIcon>
      </button>
    </form>
  );
};

export default Input;

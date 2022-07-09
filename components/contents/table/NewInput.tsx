import type { ChangeEvent, FC } from "react";
import {
  item,
  itemBox,
  itemInput,
  itemLabel
} from "../../../styles/components/createnew.css";

type InputProps = {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const NewInput: FC<InputProps> = ({ label, value, onChange, placeholder }) => {
  return (
    <div className={item}>
      <h1 className={itemLabel}>{label}</h1>
      <form className={itemBox} onSubmit={e => e.preventDefault()}>
        <input
          className={itemInput}
          value={value}
          onChange={onChange}
          type="text"
          placeholder={placeholder}
        />
      </form>
    </div>
  );
};

export default NewInput;

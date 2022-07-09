import type { FC, ReactNode } from "react";

type MaterialIconProps = {
  type: "" | "outlined";
  children: ReactNode;
};

const MaterialIcon: FC<MaterialIconProps> = ({ type, children }) => {
  const classname = type === "" ? type : `-${type}`;
  return <span className={`material-icons${classname}`}>{children}</span>;
};

export default MaterialIcon;

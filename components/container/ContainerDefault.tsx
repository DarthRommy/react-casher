import type { FCWithChildren } from "../../lib/misc/componentTypes";
import { normal } from "../../styles/components/container.css";

const ContainerDefault: FCWithChildren = ({ children }) => (
  <div className={normal}>{children}</div>
);

export default ContainerDefault;

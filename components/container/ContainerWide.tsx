import type { FCWithChildren } from "../../lib/misc/componentTypes";
import { wide } from "../../styles/components/container.css";

const ContainerWide: FCWithChildren = ({ children }) => (
  <div className={wide}>{children}</div>
);

export default ContainerWide;

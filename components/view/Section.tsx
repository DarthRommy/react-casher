import classNames from "classnames";
import type { FCWithChildren } from "../../lib/misc/componentTypes";
import { darkSection, section } from "../../styles/components/view.css";

type SectionProps = {
  type?: "light" | "dark";
};

const Section: FCWithChildren<SectionProps> = ({
  children,
  type = "light",
}) => (
  <section className={classNames(section, { [darkSection]: type === "dark" })}>
    {children}
  </section>
);

export default Section;

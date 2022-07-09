import type { FC } from "react";
import { SiReact } from "react-icons/si";
import ContainerWide from "../components/container/ContainerWide";
import Anchor from "../components/general/Anchor";
import MaterialIcon from "../components/general/MIcon";
import {
  actions,
  actionsArea,
  header,
  homeLink,
  icon,
  inner,
} from "../styles/components/appheader.css";

const AppHeader: FC = () => (
  <header className={header}>
    <ContainerWide>
      <div className={inner}>
        <div className={homeLink}>
          <Anchor pathname="/">
            Casher.js
            <SiReact className={icon} />
          </Anchor>
        </div>
        <div className={actionsArea}>
          <Anchor pathname="/help" className={actions}>
            <MaterialIcon type="outlined">help_outline</MaterialIcon>
          </Anchor>
          <Anchor pathname="https://readmejs.vercel.app/" className={actions}>
            <MaterialIcon type="outlined">article</MaterialIcon>
          </Anchor>
        </div>
      </div>
    </ContainerWide>
  </header>
);

export default AppHeader;

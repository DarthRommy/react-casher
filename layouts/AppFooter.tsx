import Image from "next/image";
import type { FC } from "react";
import ContainerDefault from "../components/container/ContainerDefault";
import Anchor from "../components/general/Anchor";
import { footerLinks } from "../lib/misc/footerlinks";
import Icon from "../public/images/footericon.png";
import {
  bottom,
  bottomContext,
  bottomWrapper,
  container,
  context,
  footer,
  header,
  icon,
  item,
  link,
  linkWrapper,
  main
} from "../styles/components/appfooter.css";

const AppFooter: FC = () => {
  const links = footerLinks.map(i => (
    <div className={item} key={`link_${i.label}`}>
      <Anchor pathname={i.url} className={link}>
        {i.label}
      </Anchor>
    </div>
  ));

  return (
    <footer className={footer}>
      <div className={main}>
        <ContainerDefault>
          <div className={container}>
            <h1 className={header}>Casher.js</h1>
            <p className={context}>
              Casher.jsは、もし模擬部の集計システムがオンラインだったら、という作者の願望を叶えるためだけに作られた自己満足Webアプリです。と言いつつも、コードをちょっと弄ればバックエンドとデータをやり取りする仕様にもできる構造になっています。
            </p>
            <div className={linkWrapper}>{links}</div>
          </div>
        </ContainerDefault>
      </div>
      <div className={bottom}>
        <ContainerDefault>
          <div className={bottomWrapper}>
            <Anchor pathname="https://github.com/darthrommy" className={icon}>
              <Image
                src={Icon}
                layout="fill"
                objectFit="cover"
                objectPosition={"50% 50%"}
                alt="icon"
                placeholder="blur"
              />
            </Anchor>
            <span className={bottomContext}>
              This is not an official software.
            </span>
          </div>
        </ContainerDefault>
      </div>
    </footer>
  );
};

export default AppFooter;

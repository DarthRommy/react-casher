import type { FC } from "react";
import ContainerDefault from "../components/container/ContainerDefault";
import Input from "../components/contents/Input";
import Showcase from "../components/contents/table/Showcase";
import Top from "../components/contents/Top";
import Section from "../components/view/Section";

const IndexPage: FC = () => {
  return (
    <>
      <Section>
        <ContainerDefault>
          <Top />
          <Input />
        </ContainerDefault>
      </Section>
      <Section type="dark">
        <ContainerDefault>
          <Showcase />
        </ContainerDefault>
      </Section>
    </>
  );
};

export default IndexPage;

import { readFileSync } from "fs";
import type { GetStaticProps } from "next";
import { join } from "path";
import type { FC } from "react";
import markdownToHtml from "zenn-markdown-html";
import ContainerDefault from "../components/container/ContainerDefault";
import MaterialIcon from "../components/general/MIcon";
import Section from "../components/view/Section";
import html2Element from "../lib/misc/html2Element";
import * as styles from "../styles/components/help.css";

type MarkdownProps = {
  content: string;
};

const HelpPage: FC<MarkdownProps> = ({ content }) => {
  const markUp = html2Element(content);
  return (
    <>
      <Section>
        <ContainerDefault>
          <div className={styles.titleContainer}>
            <div className={styles.titleInner}>
              <div className={styles.icon}>
                <MaterialIcon type="outlined">help_outline</MaterialIcon>
              </div>
              <h1 className={styles.title}>Help</h1>
            </div>
          </div>
        </ContainerDefault>
      </Section>
      <article className={styles.article}>
        <ContainerDefault>{markUp}</ContainerDefault>
      </article>
    </>
  );
};

export const getStaticProps: GetStaticProps<MarkdownProps> = async () => {
  const absolutePath = join(process.cwd(), "_markdown", "help.md");
  const markdown = readFileSync(absolutePath, "utf8");
  const content = markdownToHtml(markdown);
  return {
    props: {
      content,
    },
  };
};

export default HelpPage;

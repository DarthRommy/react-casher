import { createElement } from "react";
import rehypeParse from "rehype-parse/lib";
import rehypeReact from "rehype-react";
import { unified } from "unified";

const processor = unified()
  .use(rehypeParse, { fragment: true })
  .use(rehypeReact, {
    createElement: createElement,
    Fragment: props => <div className="znc" {...props} />,
  })
  .freeze();

const html2Element = (src: string) => {
  const { result } = processor.processSync(src);
  return result;
};

export default html2Element;

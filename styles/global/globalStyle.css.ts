import { globalStyle } from "@vanilla-extract/css";
import { codeFamily, commonTextColor, fontFamily } from "./variables.css";

globalStyle("*,:after,:before", {
  boxSizing: "border-box",
});

globalStyle("html,body", {
  margin: 0,
  fontFamily: fontFamily,
  wordBreak: "break-word",
  WebkitTextSizeAdjust: "none",
  color: commonTextColor,
});

globalStyle("a", {
  textDecoration: "none",
  textUnderlineOffset: "0.15em",
  transition: "0.25s",
  color: commonTextColor,
});

globalStyle("h1,h2,h3,h4,h5,h6,p", {
  margin: 0,
  lineHeight: 1.5,
});

globalStyle(".znc h1,h2,h3,h4,h5,h6,p", {
  lineHeight: 1.9,
});

globalStyle("code, .znc code", {
  fontFamily: codeFamily,
});

globalStyle("button", {
  cursor: "pointer",
  appearance: "none",
  background: "#0000",
  fontSize: "inherit",
  fontWeight: "inherit",
  transition: "0.25s",
  padding: 0,
  margin: 0,
  color: commonTextColor,
  outlineOffset: "2px",
});

globalStyle("button:disabled", {
  cursor: "default",
});

globalStyle("input", {
  outline: 0,
  resize: "none",
});

globalStyle("button,input", {
  fontFamily: "inherit",
  border: "none",
  borderRadius: 0,
  padding: 0,
});

globalStyle("ol,ul", {
  margin: 0,
  padding: 0,
  listStyle: "none",
});

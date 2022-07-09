import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import {
  codeFamily,
  fontFamily,
  fontLG,
  fontMD,
  fontSM,
  fontXL,
  fontXS,
} from "./variables.css";

globalStyle(":root", {
  vars: {
    [fontFamily]: "Inter, Noto Sans JP, sans-serif",
    [codeFamily]: "Jet Brains Mono, monospace",
    [fontXS]: "14px",
    [fontSM]: "16px",
    [fontMD]: "18px",
    [fontLG]: "24px",
    [fontXL]: "32px",
  },
});

globalFontFace("Jet Brains Mono", {
  src: "url(/fonts/JetBrainsMono/Regular.woff2) format('woff2')",
  fontDisplay: "swap",
  fontWeight: "normal",
  fontStyle: "normal",
});

globalFontFace("Jet Brains Mono", {
  src: "url(/fonts/JetBrainsMono/Italic.woff2) format('woff2')",
  fontDisplay: "swap",
  fontWeight: "normal",
  fontStyle: "italic",
});

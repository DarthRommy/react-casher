import { globalStyle } from "@vanilla-extract/css";
import {
  space0,
  space12,
  space16,
  space24,
  space32,
  space4,
  space48,
  space64,
  space8,
} from "./variables.css";

globalStyle(":root", {
  vars: {
    [space0]: "0px",
    [space4]: "4px",
    [space8]: "8px",
    [space12]: "12px",
    [space16]: "16px",
    [space24]: "24px",
    [space32]: "32px",
    [space48]: "48px",
    [space64]: "64px",
  },
});

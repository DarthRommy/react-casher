import { globalStyle } from "@vanilla-extract/css";
import {
  commonTextColor,
  darkBG,
  darkTextColor,
  footerBG,
  formBorder,
  headerBG,
  lightBG,
  materialIconColor,
  viewBorder,
} from "./variables.css";

globalStyle(":root", {
  vars: {
    [commonTextColor]: "#000000d1",
    [darkTextColor]: "#fff",
    [materialIconColor]: "#666",
    [headerBG]: "#fff",
    [footerBG]: "#f8f8f8",
    [lightBG]: "#f6f7f9",
    [darkBG]: "#252832",
    [formBorder]: "#8d97a5",
    [viewBorder]: "#dce0e3",
  },
});

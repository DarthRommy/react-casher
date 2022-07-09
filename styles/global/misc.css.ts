import { globalStyle } from "@vanilla-extract/css";
import { headerHeight } from "./variables.css";

globalStyle(":root", {
  vars: {
    [headerHeight]: "64px",
  },
});

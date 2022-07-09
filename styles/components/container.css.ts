import { style } from "@vanilla-extract/css";

const common = style({
  margin: "0 auto",
  padding: "0 14px",
  "@media": {
    "screen and (min-width: 400px)": {
      padding: "0 20px",
    },
    "screen and (min-width: 576px)": {
      padding: "0 25px",
    },
    "screen and (min-width: 768px)": {
      padding: "0 40px",
    },
  },
});

export const normal = style([common, { maxWidth: 960 }]);

export const wide = style([common, { maxWidth: 1200 }]);

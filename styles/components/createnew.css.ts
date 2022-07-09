import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import {
  darkTextColor,
  fontFamily,
  fontMD,
  fontSM,
  formBorder,
  space12,
  space16,
  space24,
  space4,
  space8,
} from "../global/variables.css";
import { flexBetween } from "../static";

export const container = style({
  padding: `${space16} ${space8}`,
});

export const grid = style({
  display: "grid",
  gap: space12,
  maxWidth: 640,
  margin: "0 auto",
});

export const item = style({
  ...flexBetween,
});

export const itemLabel = style({
  color: darkTextColor,
  fontSize: fontMD,
  fontWeight: 600,
  flexShrink: 0,
});

export const itemBox = style({
  padding: `${space8} ${space12}`,
  borderRadius: 6,
  width: calc.subtract("100%", "60px"),
  border: `1px solid ${formBorder}`,
  transitionDuration: "0.15s",
  transitionTimingFunction: "ease-in-out",
  flexBasis: "auto",
  selectors: {
    "&:focus-within": {
      boxShadow: `0 0 0 4px #353948`,
    },
  },
});

export const itemInput = style({
  color: darkTextColor,
  background: "transparent",
  fontFamily: fontFamily,
  fontSize: fontSM,
  width: "100%",
  lineHeight: 1.4,
});

export const actionArea = style({
  textAlign: "center",
  padding: `${space24} 0`,
  fontWeight: 700,
});

export const addNew = style({
  ...flexBetween,
  columnGap: space4,
  display: "inline-flex",
  color: darkTextColor,
  background: "#495376",
  borderRadius: 12,
  padding: `${space8} ${space12}`,
  fontSize: fontSM,
  boxShadow: "2px 2px 0 #3c3c4a",
  selectors: {
    "&:disabled": {
      background: "#313644",
      color: "#878787",
      boxShadow: "0 0 0 #3c3c4a",
    },
  },
});

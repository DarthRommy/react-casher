import { createVar, style } from "@vanilla-extract/css";
import {
  fontLG,
  fontSM,
  fontXS,
  footerBG,
  materialIconColor,
  space16,
  space24,
  space32,
  space48,
  space8,
  viewBorder
} from "../global/variables.css";
import { flex, flexBetween } from "../static";

export const footer = style({
  background: footerBG,
});

export const main = style({
  padding: `${space48} 0`,
});

export const bottom = style({
  padding: `${space24} 0`,
  borderTop: `1px solid ${viewBorder}`,
});

export const container = style({
  ...flexBetween,
  flexWrap: "wrap",
});

export const header = style({
  fontSize: fontLG,
  width: "100%",
  marginBottom: space16,
});

export const context = style({
  fontSize: fontXS,
  lineHeight: 1.7,
  fontWeight: 400,
  width: "100%",
  "@media": {
    "screen and (min-width: 576px)": {
      width: "50%",
      paddingRight: space32,
    },
  },
});

export const linkWrapper = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, auto)",
  columnGap: space24,
  rowGap: space8,
  marginTop: space48,
  "@media": {
    "screen and (min-width: 576px)": {
      marginTop: 0,
    },
  },
});

export const item = style({
  position: "relative",
  selectors: {
    "&::after": {
      color: materialIconColor,
      position: "absolute",
      left: 0,
      top: 2,
      fontWeight: 700,
      content: "link",
      lineHeight: 1,
      fontSize: fontSM,
      ...flex,
      fontFamily: "Material Icons Outlined",
    },
  },
});

const linkColor = createVar();

export const link = style({
  position: "relative",
  color: linkColor,
  fontSize: fontXS,
  fontWeight: 600,
  marginLeft: space24,
  selectors: {
    "&:hover": {
      borderBottom: `1px solid ${linkColor}`,
    },
  },
  vars: {
    [linkColor]: "#267fbf",
  },
});

export const bottomWrapper = style({
  ...flexBetween,
});

export const icon = style({
  position: "relative",
  width: 48,
  aspectRatio: "1",
  borderRadius: "50%",
  overflow: "hidden",
  boxShadow: "2px 2px 0 1px #ccc",
});

export const bottomContext = style({
  fontSize: 12,
  fontWeight: 400,
});

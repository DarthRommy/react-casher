import { globalStyle, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import {
  darkTextColor,
  fontLG,
  fontMD,
  fontSM,
  fontXL,
  headerHeight,
  space12,
  space16,
  space4,
  space8
} from "../global/variables.css";

export const wrapper = style({
  minHeight: calc.subtract("100vh", headerHeight, "386px", "128px"),
  "@media": {
    "screen and (min-width: 768px)": {
      minHeight: calc.subtract("100vh", headerHeight, "498px", "128px"),
    },
  },
});

export const context = style({
  textAlign: "center",
  marginBottom: space16,
});

export const header = style({
  fontWeight: 700,
  color: darkTextColor,
  fontSize: fontXL,
});

export const container = style({
  padding: `${space16} 0`,
  textAlign: "center",
});

export const message = style({
  color: darkTextColor,
});

export const message1 = style({
  fontWeight: 300,
  fontSize: fontSM,
});

export const message2 = style({
  fontWeight: 700,
  fontSize: fontLG,
  marginBottom: space16,
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: fontXL,
    },
  },
});

export const addNew = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  color: darkTextColor,
  fontWeight: 300,
  fontSize: fontSM,
  columnGap: space4,
  marginTop: space16,
  padding: `${space8} ${space12}`,
  zIndex: 1,
  selectors: {
    "&::after": {
      content: "",
      zIndex: 0,
      position: "absolute",
      width: "100%",
      bottom: 0,
      left: 0,
      height: 2,
      background: "#3a4362",
      transition: "0.2s ease",
    },
    "&:hover::after": {
      background: "#4f5876",
    },
  },
});

globalStyle(`${addNew} > span`, {
  fontSize: fontMD,
  transition: "0.2s ease",
});

export const addNewOpened = style({});

globalStyle(`${addNewOpened} > span`, {
  transform: "rotate(45deg)",
});

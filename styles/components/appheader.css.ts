import { globalStyle, style } from "@vanilla-extract/css";
import {
  fontFamily,
  fontLG,
  fontMD,
  headerBG,
  headerHeight,
  materialIconColor,
  space16,
} from "../global/variables.css";
import { flex, flexBetween, flexCenter } from "../static";

export const header = style({
  background: headerBG,
  position: "sticky",
  top: 0,
  zIndex: 300,
  boxShadow: "0 0 8px 4px #2828280a"
});

export const inner = style({
  ...flexBetween,
  height: headerHeight,
});

export const homeLink = style({
  ...flex,
  height: headerHeight,
  fontFamily: fontFamily,
  fontWeight: 700,
  position: "relative",
});

export const icon = style({
  fontSize: fontMD,
  color: "#61dafb",
  top: 16,
  position: "absolute",
});

globalStyle(`${homeLink} > a`, {
  lineHeight: 1.4,
  fontSize: fontLG,
});

export const actionsArea = style(flex);

export const actions = style({
  ...flexCenter,
  color: materialIconColor,
  selectors: {
    "&:not(:first-child)": {
      marginLeft: space16,
    },
  },
});

globalStyle(`${actions} > span`, {
  width: fontLG,
  fontSize: fontLG,
  overflow: "hidden",
});

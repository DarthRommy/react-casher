import { globalStyle, style } from "@vanilla-extract/css";
import { fontXL, space16, space48 } from "../global/variables.css";
import { flexCenter } from "../static";

export const titleContainer = style({
  margin: "auto 0",
});

export const titleInner = style({
  ...flexCenter,
  columnGap: space16,
});

export const icon = style({
  background: "#fff",
  borderRadius: "50%",
  padding: space16,
  aspectRatio: "1",
  ...flexCenter,
  boxShadow: "0 0 4px 2px #e0e6ef",
});

globalStyle(`${icon} > span`, {
  fontSize: fontXL,
});

export const title = style({
  fontSize: fontXL,
  fontWeight: 700,
});

export const article = style({
  padding: `${space48} 0`,
});

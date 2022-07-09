import { globalStyle, style } from "@vanilla-extract/css";
import {
  darkBG,
  fontXL,
  lightBG,
  space16,
  space64,
  viewBorder,
} from "../global/variables.css";
import { flex } from "../static";

export const titleContainer = style(flex);

export const title = style({
  ...flex,
  fontSize: fontXL,
  fontWeight: 700,
});

globalStyle(`${title} span`, {
  ...flex,
  fontSize: 32,
  marginRight: 6,
});

export const section = style({
  background: lightBG,
  padding: `${space64} 0`,
});

export const darkSection = style({
  background: darkBG,
});

export const contentContainer = style({ marginTop: space16 });

export const border = style({
  width: "100%",
  height: 2,
  background: viewBorder,
  display: "flex",
});

import { style } from "@vanilla-extract/css";
import {
  fontLG,
  fontMD,
  fontXL,
  space12,
  space16,
  space32,
  space48,
} from "../global/variables.css";
import { flex, flexCenter } from "../static";

export const wrapper = style({
  marginBottom: space48,
  textAlign: "center",
});

export const question = style({
  fontWeight: 300,
  fontSize: fontMD,
});

export const answer = style({
  fontWeight: 700,
  fontSize: fontLG,
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: fontXL,
    },
  },
});

export const totalArea = style({
  margin: "0 auto",
  ...flexCenter,
  marginTop: space32,
  columnGap: space16,
});

export const icon = style({
  lineHeight: 1,
  fontSize: 32,
  position: "relative",
  display: "inline-flex",
  background: "#fff",
  padding: space12,
  borderRadius: "50%",
  boxShadow: "0 0 4px 4px #c6d1db1a",
});

export const totalContext = style({
  textAlign: "start",
});

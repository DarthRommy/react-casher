import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import {
  commonTextColor,
  fontFamily,
  fontMD,
  formBorder,
  materialIconColor,
  space12,
  space16,
} from "../global/variables.css";
import { flex } from "../static";

export const inputField = style({
  padding: `${space12} ${space16}`,
  border: `2px solid ${formBorder}`,
  borderRadius: 8,
  overflow: "hidden",
  position: "relative",
  ...flex,
  transition: "0.15s ease-in-out",
  selectors: {
    "&:focus-within": {
      boxShadow: "0 0 0 4px #c4d3dd",
    },
  },
});

export const input = style({
  fontSize: fontMD,
  width: calc.subtract("100%", "24px"),
  background: "transparent",
  color: commonTextColor,
  fontFamily: fontFamily,
  fontWeight: 400,
  lineHeight: 1.5,
});

export const errorInput = style({
  selectors: {
    "&::placeholder": {
      color: "#f00",
    },
  },
});

export const actionClear = style({
  color: materialIconColor,
  ...flex,
});

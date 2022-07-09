import { globalStyle, style } from "@vanilla-extract/css";
import {
  darkBG,
  darkTextColor,
  space12,
  space16,
} from "../global/variables.css";

export const wrapper = style({
  width: "100%",
  overflowX: "auto",
});

export const table = style({
  whiteSpace: "nowrap",
  borderCollapse: "collapse",
  margin: "0 auto",
});

export const tableRow = style({
  backgroundImage: "linear-gradient(60deg, #3f3264 0%, #34546a 100%)",
});

globalStyle(`${tableRow} th, ${tableRow} td`, {
  textAlign: "center",
  border: `2px solid ${darkBG}`,
  color: darkTextColor,
  padding: `${space12} ${space16}`,
});

globalStyle(`${tableRow} th`, {
  fontWeight: 700,
});

globalStyle(`${tableRow} td`, {
  fontWeight: 300,
});

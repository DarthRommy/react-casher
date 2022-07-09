import { atom } from "recoil";
import type { Barcode } from "./types";

const barcodes = atom<Barcode[]>({
  key: "barcodes",
  default: [],
});

export default barcodes;

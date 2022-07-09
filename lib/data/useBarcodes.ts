import { useRecoilState_TRANSITION_SUPPORT_UNSTABLE } from "recoil";
import atom from "./barcodes";
import type { Barcode, UseBarcodes } from "./types";

/**
 * ここを書き換えればバックエンドを繋げられるぞ
 */
const useBarcodes: UseBarcodes = () => {
  const [barcodes, setBarcodes] =
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE(atom);

  const addBarcode = (value: Barcode) => {
    setBarcodes([...barcodes, value]);
  };

  const readBarcode = (code: string) => {
    const newValue = barcodes.map(item =>
      item.code === code
        ? {
            ...item,
            count: item.count + 1,
          }
        : item
    );
    setBarcodes(newValue);
  };

  const findBarcode = (code: string) => {
    return barcodes.some(v => v.code === code);
  };

  return {
    barcodes,
    addBarcode,
    readBarcode,
    findBarcode,
  };
};

export default useBarcodes;

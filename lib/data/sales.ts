import { selector, useRecoilValue } from "recoil";
import barcodes from "./barcodes";

const totalState = selector<number>({
  key: "sales",
  get: ({ get }) => {
    const state = get(barcodes);
    const total = state.reduce(
      (prev, current) => prev + current.price * current.count,
      0
    );
    return total;
  },
});

const useSales = () => useRecoilValue(totalState);

export default useSales;

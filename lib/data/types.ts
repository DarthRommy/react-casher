export type Barcode = {
  label: string;
  code: string;
  price: number;
  count: number;
};

export type UseBarcodes = () => {
  barcodes: Barcode[];
  addBarcode: (value: Barcode) => void;
  readBarcode: (code: string) => void;
  findBarcode: (code: string) => boolean;
};

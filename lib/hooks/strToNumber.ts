type Str2Number = (base: string) => number;

const str2Number: Str2Number = base => {
  const parsed = parseInt(base, 10);
  return isNaN(parsed) ? 0 : parsed;
};

export default str2Number;

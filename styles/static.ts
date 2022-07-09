export const flex = {
  display: "flex",
  alignItems: "center",
};

const justifyCenter = {
  justifyContent: "center",
};

const justifyBetween = {
  justifyContent: "space-between",
};

export const flexCenter = {
  ...flex,
  ...justifyCenter,
};

export const flexBetween = {
  ...flex,
  ...justifyBetween,
};

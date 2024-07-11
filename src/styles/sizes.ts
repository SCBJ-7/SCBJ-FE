import { spacing } from "./spacing";

const overlay = {
  sheet: "518px",
  dialog: "240px",
};

const container = {
  sm: "360px",
  md: "640px",
  lg: "768px",
  xl: "1024px",
};

const sizes = {
  space: spacing,
  ...overlay,
  container,
};

export default sizes;

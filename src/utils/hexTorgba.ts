export const hexToRgba = (hex: string, alpha = 1) => {
  const match = hex.match(/\w\w/g) || [];
  const [r, g, b] = match.map((x) => parseInt(x, 16));
  if (match.length !== 3) {
    throw new Error("Invalid hex string");
  }
  return `rgba(${r},${g},${b},${alpha})`;
};

export const hexToRgba = (hex: string, alpha = 1) => {
  const match = hex.match(/\w\w/g) || [];
  const [r, g, b] = match.map((x) => parseInt(x, 16));
  if (match.length !== 3) {
    throw new Error("Invalid hex string");
  }
  return `rgba(${r},${g},${b},${alpha})`;
};

/**
 * Converts pixel size to rem and accepts the base as second argument. default base is 16px
 *
 * @param {number|string} px
 * @param {boolean} suffix
 * @param {number} base
 * @return {string}
 */
export const remCalc = (
  px: number | string,
  suffix = true,
  base = 16,
): string => {
  let tempPx: number;

  if (typeof px === "string") {
    // Remove 'px' and trim any extraneous whitespace
    tempPx = parseFloat(px.replace(/px/gi, "").trim());
  } else {
    tempPx = px;
  }

  // Validate the parsed number
  if (isNaN(tempPx)) {
    throw new Error(
      "Invalid input: Input must be a number or a string representing a number with 'px'.",
    );
  }

  const result = tempPx / base;
  return suffix ? result + "rem" : result.toString();
};

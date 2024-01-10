export const calculateDiscount = (
  originalPrice: number,
  sellingPrice: number,
) => {
  return (((originalPrice - sellingPrice) / originalPrice) * 100).toFixed(0);
};

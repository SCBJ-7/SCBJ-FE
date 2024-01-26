export const calculateDiscount = (
  originalPrice: number,
  sellingPrice: number,
) => {
  return (((originalPrice - sellingPrice) / originalPrice) * 100).toFixed(0);
};

export const calculateFee = (sellingPrice: number) => {
  const feeRate = sellingPrice <= 150000 ? 2 : sellingPrice <= 300000 ? 3 : 5;

  return (sellingPrice / 100) * feeRate;
};

export const isMobile = () => {
  const user = navigator.userAgent;
  let isCheck = false;

  if (user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1) {
    isCheck = true;
  }

  return isCheck;
};

export const isMobileSafari = () => {
  const userAgent = navigator.userAgent;
  const isMobileSafari =
    /iPhone|iPad|iPod/i.test(userAgent) && /AppleWebKit/i.test(userAgent);
  return isMobileSafari;
};

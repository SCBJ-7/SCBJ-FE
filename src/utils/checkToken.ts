export function isAccessTokenExpired(accessToken: string) {
  if (!accessToken) {
    return true;
  }
  const temp = accessToken.split(" ")[1];

  const decodedToken = decodeAccessToken(temp);
  const currentTime = Math.floor(Date.now() / 1000);

  return decodedToken.exp < currentTime;
}

function decodeAccessToken(accessToken: string) {
  const tokenParts = accessToken.split(".");
  const encodedPayload = tokenParts[1];
  const decodedPayload = atob(encodedPayload);

  return JSON.parse(decodedPayload);
}

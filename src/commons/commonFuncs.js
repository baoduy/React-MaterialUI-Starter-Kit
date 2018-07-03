//correct URL for Reserved proxy
export function getImgUrl(url) {
  if(typeof url!=="string")
    return url;
  
  const base = window._base;
  return base && base!=="/" ? `${base}/${url}` : url;
}

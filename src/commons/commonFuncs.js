//correct URL for Reserved proxy
export function getImgUrl(url) {
  const base = window._base;
  return base ? `${base}/${url}` : url;
}

//correct URL for Reserved proxy
export function getImgSrc(url) {
  if (typeof url !== "string") return url;
  const base = window._base;

  if (!base || base === "/") return url;
  if (url.indexOf(base) >= 0) return url;

  return `${base}/${url}`;
}

import uuidv4 from "uuid/v4";
//correct URL for Reserved proxy
//Get the minisecond of current time.

export function newGuid() {
  return uuidv4();
}

export function getImgSrc(url) {
  if (typeof url !== "string") return url;
  const base = window._base;

  if (!base || base === "/") return url;
  if (url.indexOf(base) >= 0) return url;

  return `${base}/${url}`;
}

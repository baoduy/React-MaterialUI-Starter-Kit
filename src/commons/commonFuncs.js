/*eslint no-console: ["off", { allow: ["warn", "error"] }] */

import linq from 'linq';
import uuidv4 from 'uuid/v4';
import Default from './constants';
//correct URL for Reserved proxy
//Get the millisecond of current time.

export function GetBaseUrl() {
  const key = 'BASE_URL';
  let base = window.sessionStorage.getItem(key);

  if (base === undefined || base === null) {
    base = document.getElementsByTagName('base')[0].getAttribute('href');
    window.sessionStorage.setItem(key, base);

    console.log(`base URL is ${base}`);
  }

  return base;
}

export function newGuid() {
  return uuidv4();
}
/**
 *getImgSrc for both normal hosting and Reverse proxy
 *
 * @export
 * @param {string} url the relative image url
 * @returns real url
 */
export function getImgSrc(url) {
  if (typeof url !== 'string') return url;
  const base = GetBaseUrl();

  return !base || base === '/' || url.indexOf(base) >= 0
    ? url
    : `${base}/${url}`;
}

/**
 *Merge second array to first array if existed then update.
 *
 * @export
 * @param {Array} [fistArray=[]]
 * @param {Array} [secondArray=[]]
 * @param {Function} [selector=i => i.id]
 */
export function Merge(fistArray = [], secondArray = [], selector = i => i.id) {
  const firstQuery = linq.from(fistArray);
  const secondQuery = linq.from(secondArray);

  const news = secondQuery.where(i =>
    firstQuery.all(f => selector(f) !== selector(i))
  );

  const exists = secondQuery.where(i =>
    firstQuery.any(f => selector(f) === selector(i))
  );

  return firstQuery
    .select(i => {
      const found = exists.firstOrDefault(e => selector(e) === selector(i));
      return found ? Object.assign({}, i, found) : i;
    })
    .union(news)
    .toArray();
}
export function getAvatar(avatar) {
  const tmp = avatar ? (avatar.includes('data:image') ? avatar : `data:image/png;base64,${avatar}`) : Default.DefaultAvatar;
  return tmp;
}
/*eslint no-console: ["off", { allow: ["warn", "error"] }] */

import linq from 'linq';
import uuidv4 from 'uuid/v4';
import Default from './constants.js';
//correct URL for Reserved proxy
//Get the millisecond of current time.

export const GetBaseUrl = () => {
  const key = 'BASE_URL';

  const base: string =
    window.sessionStorage.getItem(key) ||
    document.getElementsByTagName('base')[0].getAttribute('href') ||
    '/';

  window.sessionStorage.setItem(key, base);

  /* devblock:start */
  console.log(`base URL is ${base}`);
  /* devblock:end */

  return base;
};

export const newGuid = () => uuidv4();

/**
 *getImgSrc for both normal hosting and Reverse proxy
 *
 * @export
 * @param {string} url the relative image url
 * @returns real url
 */
export function getImgSrc(url: string) {
  //if (typeof url !== 'string') return url;
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
export function Merge(
  fistArray = [],
  secondArray = [],
  selector = (i: any) => i.id
) {
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
export function getAvatar(avatar: string): string {
  const tmp = avatar
    ? avatar.includes('data:image')
      ? avatar
      : `data:image/png;base64,${avatar}`
    : Default.DefaultAvatar;
  return tmp;
}

export function isValidEmail(email: string): boolean {
  if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return false;
  }
  return true;
}

export function convertToFormData(object: any): FormData | undefined {
  if (!object) return undefined;

  const formData = new FormData();
  for (var key in object) formData.append(key, object[key]);

  return formData;
}

import linq from 'linq';
import uuidv4 from 'uuid/v4';
//correct URL for Reserved proxy
//Get the millisecond of current time.

export function newGuid() {
  return uuidv4();
}

export function getImgSrc(url) {
  if (typeof url !== 'string') return url;
  const base = window._base;

  if (!base || base === '/') return url;
  if (url.indexOf(base) >= 0) return url;

  return `${base}/${url}`;
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

import { getImgSrc, newGuid } from '../../src/commons/commonFuncs';

window.sessionStorage.setItem('BASE_URL', '/ReactJs');

test('2 GUID must be difference', () => {
  const g1 = newGuid();
  const g2 = newGuid();

  expect(g1).not.toBe(g2);
});

test('getImgSrc should add basename to url', () => {
  expect(getImgSrc('/img/a.png')).toContain('/ReactJs');
});

test('getImgSrc should not add basename to url', () => {
  expect(getImgSrc('/ReactJs/img/a.png')).toBe('/ReactJs/img/a.png');
});

test('getImgSrc should return original object', () => {
  const url = { a: 1 };
  expect(getImgSrc(url)).toBe(url);
});

test('getImgSrc should return original string', () => {
  const url = '123';
  window.sessionStorage.setItem('BASE_URL', '/');

  expect(getImgSrc(url)).toBe(url);
});

test('getImgSrc should do nothing', () => {
  const url = '123';
  window.sessionStorage.setItem('BASE_URL', '');

  expect(getImgSrc(url)).toBe(url);
});

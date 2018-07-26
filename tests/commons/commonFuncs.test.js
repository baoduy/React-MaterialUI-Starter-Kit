import { getImgSrc, newGuid } from "../../src/commons/commonFuncs";

test("2 GUID must be difference", () => {
  const g1 = newGuid();
  const g2 = newGuid();

  expect(g1).not.toBe(g2);
});

test("getImgSrc should add basename to url", () => {
  window._base = "/ReactJs";
  expect(getImgSrc("/img/a.png")).toContain(window._base);
});

test("getImgSrc should not add basename to url", () => {
  window._base = "/ReactJs";
  expect(getImgSrc("/ReactJs/img/a.png")).toBe("/ReactJs/img/a.png");
});

test("getImgSrc should return original object", () => {
  window._base = "/ReactJs";
  const url = { a: 1 };
  expect(getImgSrc(url)).toBe(url);
});

test("getImgSrc should return original string", () => {
  window._base = "/";
  const url = "123";
  expect(getImgSrc(url)).toBe(url);
});

test("getImgSrc should do nothing", () => {
  window._base = undefined;
  const url = "123";
  expect(getImgSrc(url)).toBe(url);
});

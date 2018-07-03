import { getImgSrc } from "../../src/commons/commonFuncs";

it("getImgSrc should add basename to url", () => {
  window._base = "/ReactJs";
  expect(getImgSrc("/img/a.png")).toContain(window._base);
});

it("getImgSrc should not add basename to url", () => {
  window._base = "/ReactJs";
  expect(getImgSrc("/ReactJs/img/a.png")).toBe("/ReactJs/img/a.png");
});

it("getImgSrc should return original object", () => {
  window._base = "/ReactJs";
  const url = { a: 1 };
  expect(getImgSrc(url)).toBe(url);
});

it("getImgSrc should return original string", () => {
  window._base = "/";
  const url = "123";
  expect(getImgSrc(url)).toBe(url);
});

it("getImgSrc should do nothing", () => {
  window._base = undefined;
  const url = "123";
  expect(getImgSrc(url)).toBe(url);
});

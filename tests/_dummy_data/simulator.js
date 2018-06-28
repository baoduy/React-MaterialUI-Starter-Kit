export default function (data, inSecond = 10) {
  return new Promise(resolve =>
    setTimeout(() => resolve(data), inSecond * 1000)
  );
}
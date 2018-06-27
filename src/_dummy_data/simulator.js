export default function (data, inSecond = 3) {
  return new Promise(resolve => setTimeout(resolve(data), inSecond * 1000));
}
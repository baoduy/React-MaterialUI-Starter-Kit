export default function (data, inSecond = 15) {
  return new Promise(resolve => setTimeout(resolve(data), inSecond * 1000));
}
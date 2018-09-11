export default function(data, inSecond = 5) {
  return new Promise(resolve =>
    setTimeout(() => resolve(data), inSecond * 1000)
  );
}

export default function genericSort<T>(a: T, b: T, property: keyof T) {
  if (a[property] > b[property]) {
    return 1;
  }
  if (a[property] < b[property]) {
    return -1;
  } else {
    return 0;
  }
}

export function kebabify(string: string) {
  return string.toLowerCase().split(" ").join("-");
}

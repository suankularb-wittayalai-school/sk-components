export function cn(classNames: (string | boolean | undefined)[]) {
  return classNames.filter((className) => className).join(" ");
}

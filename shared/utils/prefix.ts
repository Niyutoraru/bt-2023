export function prefix(prefix: string, style: string) {
  return style
    .split(" ")
    .map((e) => `${prefix}:${e}`)
    .join(" ");
}

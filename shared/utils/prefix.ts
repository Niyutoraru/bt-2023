export function prefix(prefix: string, style: string) {
  const asd = style
    .split(" ")
    .map((e) => `${prefix}:${e}`)
    .join(" ");

  return asd;
}

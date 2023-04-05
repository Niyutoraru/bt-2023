export function tailwindClasses(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

import { ReactNode } from "react";

export function Heading({ children }: { children: ReactNode }) {
  return <h1 className="text-4xl font-extrabold">{children}</h1>;
}

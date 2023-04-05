import { ReactNode } from "react";

export function Main({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="flex flex-col gap-10 bg-neutral-100 p-8">
        {children}
      </main>
    </>
  );
}

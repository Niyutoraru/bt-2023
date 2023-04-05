import { ReactNode, useState } from "react";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Main } from "./Main";

export function RootLayout({ children }: { children: ReactNode }) {
  const [navbarVisibility, setNavbarVisibility] = useState(false);

  function onToggleNavbarVisibility(option?: boolean) {
    setNavbarVisibility(option !== undefined ? option : !navbarVisibility);
  }

  return (
    <>
      <div className="grid min-h-[100svh] grid-cols-1 grid-rows-[4rem_1fr] lg:grid-cols-[15rem_1fr]">
        <Header feature={onToggleNavbarVisibility} />
        <Navbar state={navbarVisibility} feature={onToggleNavbarVisibility} />
        <Main>{children}</Main>
        <Footer />
      </div>
    </>
  );
}

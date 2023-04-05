import Link from "next/link";
import { Searchbar } from "./Searchbar";

export function Header({ feature }: { feature: (option?: boolean) => void }) {
  return (
    <>
      <span className="col-span-full">
        <header className="fixed top-0 z-30 flex h-16 w-full items-center gap-4 border-b bg-white px-6 py-4">
          <MenuIcon feature={feature} />
          <Link
            className="text-lg font-bold"
            href={"/"}
            onClick={() => feature(false)}
          >
            LAYOUT
          </Link>
          <div className="ml-auto flex gap-2">
            <Searchbar position="HEADER" />
            <button className="rounded bg-blue-200 px-4 py-2 font-semibold text-blue-500">
              Sign in
            </button>
          </div>
        </header>
      </span>
    </>
  );
}

function MenuIcon({ feature }: { feature: () => void }) {
  return (
    <button className="inline-block lg:hidden" onClick={() => feature()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=""
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 6l16 0"></path>
        <path d="M4 12l16 0"></path>
        <path d="M4 18l16 0"></path>
      </svg>
    </button>
  );
}

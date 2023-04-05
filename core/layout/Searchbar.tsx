import { tailwindClasses } from "@/shared/utils/tailwindClasses";

export function Searchbar({ position }: { position: "NAVBAR" | "HEADER" }) {
  const options = {
    NAVBAR: "flex lg:hidden",
    HEADER: "hidden lg:flex",
  };

  return (
    <>
      <div className={tailwindClasses(options[position], "ml-auto")}>
        <input
          className="w-full min-w-0 rounded-s-lg border px-3 py-1 focus:outline-none"
          type="search"
        />
        <SearchIcon />
      </div>
    </>
  );
}

function SearchIcon() {
  return (
    <>
      <button className="flex w-10 items-center justify-center rounded-e bg-neutral-200 p-2 text-neutral-500">
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
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
          <path d="M21 21l-6 -6"></path>
        </svg>
      </button>
    </>
  );
}

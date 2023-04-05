import { tailwindClasses } from "@/shared/utils/tailwindClasses";
import { Searchbar } from "./Searchbar";

const collection = [
  {
    name: "Direction",
    link: "/direction",
  },
  {
    name: "Wrap",
    link: "/wrap",
  },
  {
    name: "Implementation",
    link: "/implementation",
  },
  {
    name: "Empty",
    link: "/empty",
  },
].sort((a, b) => a.name.localeCompare(b.name));

export function Navbar({
  state,
  feature,
}: {
  state: boolean;
  feature: () => void;
}) {
  return (
    <>
      <span className="order-last lg:order-none">
        <nav
          className={tailwindClasses(
            state ? "left-0" : "-left-[15rem]",
            "fixed top-[4rem] z-30 flex h-[calc(100%-4rem)] w-[15rem] flex-col gap-2 border-r bg-white px-6 py-4 duration-300 lg:left-0"
          )}
        >
          <Searchbar position="NAVBAR" />
          <ul>
            {collection.map((list, i) => {
              return (
                <li key={`list-${i}`}>
                  <a
                    className="inline-block w-full p-2"
                    href={list.link}
                    onClick={feature}
                  >
                    {list.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </span>
    </>
  );
}

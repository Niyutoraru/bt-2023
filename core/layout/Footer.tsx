import Link from "next/link";
const collection = [
  {
    title: "About us",
    links: ["About us", "Our services", "Releases", "Privacy policy"],
  },
  {
    title: "Community",
    links: ["FAQ", "Follow on Twitter", "Follow on Github"],
  },
];

export function Footer() {
  return (
    <>
      <footer className="flex flex-wrap gap-4 border-t bg-neutral-800 p-6 text-neutral-100 lg:col-start-2 lg:col-end-3">
        <div className="grow-[9999] basis-[9.375rem]">
          <Link className="text-2xl font-bold" href={"/"}>
            LAYOUT
          </Link>
        </div>
        <div className="grid grow basis-[25rem] grid-cols-2 gap-4">
          {collection.map((block, i) => {
            return (
              <div key={`block-${i}`}>
                <h4 className="my-2 text-lg font-bold underline">
                  {block.title}
                </h4>
                <ul>
                  {block.links.map((link, i) => {
                    return (
                      <li key={`${block}-${i}`}>
                        <a className="my-1 inline-block" href="#">
                          {link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </footer>
    </>
  );
}

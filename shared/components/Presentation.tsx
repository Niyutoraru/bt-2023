import { tailwindClasses } from "../utils/tailwindClasses";

export function Presentation({
  heading,
  tw,
  collection,
}: {
  heading: string;
  tw: string;
  collection: string[];
}) {
  return (
    <>
      <h2>{heading}</h2>
      <section className={tailwindClasses(tw)}>
        {collection.map((item, i) => {
          return (
            <div
              className="border border-blue-500 bg-blue-200 p-2 text-blue-500 outline"
              key={`item-${i}`}
            >
              {item}
            </div>
          );
        })}
      </section>
    </>
  );
}

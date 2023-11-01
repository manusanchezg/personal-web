import { useRef } from "react";

export default function Scroll({
  images,
  information,
  link,
}: {
  images: string[];
  information: string;
  link: string;
}) {
  const ref = useRef(null);

  return (
    <>
      <ul
        ref={ref}
        className="flex list-none h-[30rem] overflow-x-scroll px-5 py-5 mx-auto"
      >
        {images.map((url, index) => (
          <li
            key={index}
            className={`w-60 bg-white ${
              index === 10 ? "mr-0" : "mr-20"
            } cursor-pointer`}
          >
            <a href={link} target="_blank">
              <img src={url} alt={information} className="w-full h-full" />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

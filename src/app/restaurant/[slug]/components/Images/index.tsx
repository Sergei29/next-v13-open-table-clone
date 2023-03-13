import React from "react";
import Image from "next/image";

const ALT_TEXT = "Restaurant gallery";
const getTitle = (imagesCount: number) => {
  if (!imagesCount) return "No photo available";
  return `${imagesCount} photo${imagesCount > 1 ? "s" : ""}`;
};

type Props = {
  images: string[];
};

const Images = ({ images }: Props): JSX.Element => (
  <div>
    <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
      {getTitle(images.length)}
    </h1>
    <div className="flex flex-wrap">
      {images.map((imageUrl) => (
        <Image
          key={imageUrl}
          src={imageUrl}
          alt={ALT_TEXT}
          width={224}
          height={176}
          className="w-56 h-44 mr-1 mb-1"
        />
      ))}
    </div>
  </div>
);

export default Images;

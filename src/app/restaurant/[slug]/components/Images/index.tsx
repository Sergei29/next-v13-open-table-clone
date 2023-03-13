import React from "react";
import Image from "next/image";
// 224/176

const ALT_TEXT = "Restaurant gallery";

type Props = {
  images: string[];
};

const Images = ({ images }: Props): JSX.Element => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">{`${
        images.length
      } photo${images.length > 1 ? "s" : ""}`}</h1>
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
};

export default Images;

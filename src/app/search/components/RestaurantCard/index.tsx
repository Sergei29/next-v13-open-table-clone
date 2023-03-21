import React from "react";
import Link from "next/link";
import Image from "next/image";

import Price from "@/app/components/Price";
import Stars from "@/app/components/Stars";
import { getRatingText, calculateReviewRatingAverage } from "@/lib";
import { RestaurantCardType } from "@/types";

type Props = { restaurant: RestaurantCardType };

const RestaurantCard = ({ restaurant }: Props): JSX.Element => {
  const { name, main_image, price, cuisine, location, slug, reviews } =
    restaurant;
  const ratingAverage = calculateReviewRatingAverage(reviews);

  return (
    <div className="border-b flex pb-5">
      <Image
        src={main_image}
        alt={name}
        width={254}
        height={144}
        className="w-44 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl">{name}</h2>
        <div className="flex items-start my-2">
          <Stars rating={ratingAverage} starSize={18} />
          <p className="ml-2 text-sm">
            {getRatingText(ratingAverage) || "no rated yet"}
          </p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price className="mr-4" price={price} />
            <p className="mr-4 capitalize">{cuisine.name}</p>
            <p className="mr-4 capitalize">{location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${slug}`}>View more information</Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

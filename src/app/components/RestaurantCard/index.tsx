import React from "react";
import Link from "next/link";
import Image from "next/image";

import { RestaurantCardType } from "@/types";
import { calculateReviewRatingAverage, getRatingStars } from "@/lib";
import Price from "../Price";
import Stars from "../Stars";

const getReviewsText = (reviews?: number) => {
  if (!reviews) return "no reviews yet";
  if (reviews === 1) return "1 review";
  return `${reviews} reviews`;
};

type Props = {
  restaurant: RestaurantCardType;
};

const RestaurantCard = ({ restaurant }: Props): JSX.Element => {
  const { main_image, name, slug, cuisine, location, price, reviews } =
    restaurant;
  const ratingAverage = calculateReviewRatingAverage(reviews);

  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href={`/restaurant/${slug}`}>
        <Image
          src={main_image}
          alt={name}
          width={254}
          height={144}
          className="w-full h-36"
        />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">{name}</h3>
          <div className="flex items-center mb-2">
            <Stars rating={ratingAverage} starSize={18} />
            <p className="ml-2">{getReviewsText(reviews?.length)}</p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className=" mr-3">{cuisine.name}</p>
            <Price className="mr-3" price={price} />
            <p>{location.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;

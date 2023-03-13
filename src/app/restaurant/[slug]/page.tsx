import React from "react";

import { RestaurantDetailsType } from "@/types";
import { db } from "@/lib";

import ReservationCard from "./components/ReservationCard";
import Description from "./components/Description";
import Navigation from "./components/Navigation";
import Reviews from "./components/Reviews";
import Ratings from "./components/Ratings";
import Images from "./components/Images";
import Title from "./components/Title";

const fetchRestaurantDetails = async (
  slug: string
): Promise<RestaurantDetailsType> => {
  try {
    const found = await db.restaurant.findUnique({
      where: {
        slug,
      },
      select: {
        id: true,
        name: true,
        description: true,
        slug: true,
        images: true,
        location: { select: { id: true, name: true } },
      },
    });

    if (!found) {
      throw new Error("not found.");
    }

    return found;
  } catch (error) {
    throw error;
  }
};

type PageProps = { params: { slug: string } };

const RestaurantDetailsPage = async ({ params }: PageProps) => {
  const restaurantFound = await fetchRestaurantDetails(params.slug);
  const { name, slug, description, images } = restaurantFound;

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <Navigation name={slug} />
        <Title>{name}</Title>
        <Ratings />
        <Description description={description} />
        <Images images={images} />
        <Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
};

export default RestaurantDetailsPage;

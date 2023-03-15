import React from "react";

import { fetchRestaurantDetails } from "@/lib";

import ReservationCard from "./components/ReservationCard";
import Description from "./components/Description";
import Navigation from "./components/Navigation";
import Reviews from "./components/Reviews";
import Ratings from "./components/Ratings";
import Images from "./components/Images";
import Title from "./components/Title";

type PageProps = { params: { slug: string } };

const RestaurantDetailsPage = async ({ params }: PageProps) => {
  const restaurantFound = await fetchRestaurantDetails(params.slug);
  const { name, slug, description, images, reviews } = restaurantFound;

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <Navigation name={slug} />
        <Title>{name}</Title>
        <Ratings />
        <Description description={description} />
        <Images images={images} />
        <Reviews reviews={reviews} />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
};

export default RestaurantDetailsPage;

import React from "react";

import ReservationCard from "./components/ReservationCard";
import Description from "./components/Description";
import Navigation from "./components/Navigation";
import Reviews from "./components/Reviews";
import Ratings from "./components/Ratings";
import Images from "./components/Images";
import Title from "./components/Title";

type PageProps = { params: { slug: string } };

const RestaurantDetailsPage = ({ params }: PageProps): JSX.Element => {
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <Navigation name={params.slug} />
        <Title>Milesstone Grill</Title>
        <Ratings />
        <Description />
        <Images />
        <Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
};

export default RestaurantDetailsPage;

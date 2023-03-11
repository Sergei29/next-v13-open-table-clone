import React from "react";

import ReservationCard from "./components/ReservationCard";
import Description from "./components/Description";
import Navigation from "./components/Navigation";
import Reviews from "./components/Reviews";
import Ratings from "./components/Ratings";
import Header from "./components/Header";
import Images from "./components/Images";
import Title from "./components/Title";

type PageProps = { params: { slug: string } };

const RestaurantDetailsPage = ({ params }: PageProps): JSX.Element => {
  return (
    <>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
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
      </div>
    </>
  );
};

export default RestaurantDetailsPage;

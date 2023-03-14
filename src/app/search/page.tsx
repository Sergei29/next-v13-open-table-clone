import React from "react";

import {
  fetchRestaurantByLocation,
  fetchLocationsList,
  fetchCuisineList,
} from "@/lib";

import RestaurantsList from "./components/RestaurantsList";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

type PageProps = { searchParams: { city: string } };

const SearchPage = async ({ searchParams }: PageProps) => {
  const restaurants = await fetchRestaurantByLocation(searchParams.city);
  const locationsList = await fetchLocationsList();
  const cuisineList = await fetchCuisineList();

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start gap-4">
        <Sidebar locationsList={locationsList} cuisineList={cuisineList} />
        <div className="w-5/6">
          <RestaurantsList list={restaurants} />
        </div>
      </div>
    </>
  );
};

export default SearchPage;

import React from "react";

import {
  fetchRestaurantByLocation,
  fetchLocationsList,
  fetchCuisineList,
} from "@/lib";
import { PriceRange } from "@/types";

import RestaurantsList from "./components/RestaurantsList";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

type PageProps = {
  searchParams: { city?: string; cuisine?: string; price?: PriceRange };
};

const SearchPage = async ({ searchParams }: PageProps) => {
  const { city, cuisine, price } = searchParams;
  const restaurants = await fetchRestaurantByLocation({ city, cuisine, price });
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

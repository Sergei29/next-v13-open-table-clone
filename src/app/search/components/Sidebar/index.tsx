"use client";

import React from "react";

import { Location, Cuisine, PriceRange } from "@/types";
import useRearchRestaurants, { KEYS } from "@/hooks/useRearchRestaurants";
import ButtonGroup from "./ButtonGroup";
import List from "./List";

interface IProps {
  locationsList: Location[] | null;
  cuisineList: Cuisine[] | null;
}

const Sidebar = ({ locationsList, cuisineList }: IProps): JSX.Element => {
  const { location, cuisine, price, setQueryParams } = useRearchRestaurants();

  const handleClickLocation = (locationName: string) => {
    setQueryParams(KEYS.LOCATION, locationName);
  };

  const handleClickCuisine = (cuisineName: string) => {
    setQueryParams(
      KEYS.CUISINE,
      cuisineName !== cuisine ? cuisineName : undefined
    );
  };

  const handleClickPrice = (priceRange: PriceRange) => {
    setQueryParams(KEYS.PRICE, priceRange !== price ? priceRange : undefined);
  };

  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        <List
          list={locationsList}
          handleItemClick={handleClickLocation}
          selectedItem={location}
        />
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2 cursor-pointer">Cuisine</h1>
        <List
          list={cuisineList}
          handleItemClick={handleClickCuisine}
          selectedItem={cuisine}
        />
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2 cursor-pointer">Price</h1>
        <ButtonGroup
          handleButtonClick={handleClickPrice}
          selectedPrice={price}
        />
      </div>
    </div>
  );
};

export default Sidebar;

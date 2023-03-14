"use client";

import React from "react";

import { Location, Cuisine, PriceRange } from "@/types";
import { classnames } from "@/lib";
import useRearchRestaurants, { KEYS } from "@/hooks/useRearchRestaurants";
import List from "./List";

interface IProps {
  locationsList: Location[] | null;
  cuisineList: Cuisine[] | null;
}

const Sidebar = ({ locationsList, cuisineList }: IProps): JSX.Element => {
  const { location, cuisine, price, setQueryParams } = useRearchRestaurants();

  const handleClickLocation = (locationName?: string) => {
    setQueryParams(KEYS.LOCATION, locationName);
  };

  const handleClickCuisine = (cuisine?: string) => {
    setQueryParams(KEYS.CUISINE, cuisine);
  };

  const handleClickPrice = (price?: PriceRange) => {
    setQueryParams(KEYS.PRICE, price);
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
        <h1
          className="mb-2 cursor-pointer"
          onClick={() => handleClickCuisine()}
        >
          Cuisine
        </h1>
        <List
          list={cuisineList}
          handleItemClick={handleClickCuisine}
          selectedItem={cuisine}
        />
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2 cursor-pointer" onClick={() => handleClickPrice()}>
          Price
        </h1>
        <div className="flex">
          <button
            className={classnames(
              "border w-full text-reg font-light rounded-l p-2",
              price === PriceRange.CHEAP && "bg-red-700"
            )}
            onClick={() => handleClickPrice(PriceRange.CHEAP)}
          >
            $$
          </button>
          <button
            className={classnames(
              "border-r border-t border-b w-full text-reg font-light p-2",
              price === PriceRange.REGULAR && "bg-red-700"
            )}
            onClick={() => handleClickPrice(PriceRange.REGULAR)}
          >
            $$$
          </button>
          <button
            className={classnames(
              "border-r border-t border-b w-full text-reg font-light p-2 rounded-r",
              price === PriceRange.EXPENSIVE && "bg-red-700"
            )}
            onClick={() => handleClickPrice(PriceRange.EXPENSIVE)}
          >
            $$$$
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

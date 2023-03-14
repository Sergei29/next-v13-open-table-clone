"use client";

import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import { Location, Cuisine, PriceRange } from "@/types";
import List from "./List";

const KEYS = {
  LOCATION: "city",
  CUISINE: "cuisine",
  PRICE: "price",
};

interface IProps {
  locationsList: Location[] | null;
  cuisineList: Cuisine[] | null;
}

const Sidebar = ({ locationsList, cuisineList }: IProps): JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams || undefined);
    params.set(key, value);
    router.replace(`${pathname}?${params}`);
  };

  const handleClickLocation = (locationName: string) => {
    setQueryParams(KEYS.LOCATION, locationName);
  };

  const handleClickCuisine = (cuisine: string) => {
    setQueryParams(KEYS.CUISINE, cuisine);
  };

  const handleClickPrice = (price: PriceRange) => {
    setQueryParams(KEYS.PRICE, price);
  };

  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        <List list={locationsList} handleItemClick={handleClickLocation} />
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        <List list={cuisineList} handleItemClick={handleClickCuisine} />
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button
            className="border w-full text-reg font-light rounded-l p-2"
            onClick={() => handleClickPrice(PriceRange.CHEAP)}
          >
            $
          </button>
          <button
            className="border-r border-t border-b w-full text-reg font-light p-2"
            onClick={() => handleClickPrice(PriceRange.REGULAR)}
          >
            $$
          </button>
          <button
            className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r"
            onClick={() => handleClickPrice(PriceRange.EXPENSIVE)}
          >
            $$$
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

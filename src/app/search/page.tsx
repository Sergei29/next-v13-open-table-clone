import React from "react";

import { RestaurantCardType } from "@/types";
import { db } from "@/lib";

import RestaurantsList from "./components/RestaurantsList";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const SELECT_CRITERIA = {
  id: true,
  main_image: true,
  name: true,
  slug: true,
  price: true,
  cuisine: {
    select: {
      id: true,
      name: true,
    },
  },
  location: {
    select: {
      id: true,
      name: true,
    },
  },
};

const fetchRestaurantByLocation = async (
  city?: string
): Promise<RestaurantCardType[] | null> => {
  try {
    if (!city) {
      return await db.restaurant.findMany({
        select: SELECT_CRITERIA,
      });
    }

    const restaurantsFound = await db.restaurant.findMany({
      where: {
        location: {
          name: {
            equals: city,
          },
        },
      },
      select: SELECT_CRITERIA,
    });

    return restaurantsFound;
  } catch (error) {
    return null;
  }
};

type PageProps = { searchParams: { city: string } };

const SearchPage = async ({ searchParams }: PageProps) => {
  const restaurants = await fetchRestaurantByLocation(searchParams.city);

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start gap-4">
        <Sidebar />
        <div className="w-5/6">
          <RestaurantsList list={restaurants} />
        </div>
      </div>
    </>
  );
};

export default SearchPage;

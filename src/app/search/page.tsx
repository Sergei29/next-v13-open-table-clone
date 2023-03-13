import React from "react";

import { RestaurantCardType } from "@/types";
import { db } from "@/lib";

import RestaurantsList from "./components/RestaurantsList";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const fetchRestaurantByLocation = async (
  city: string
): Promise<RestaurantCardType[] | null> => {
  try {
    const restaurantsFound = await db.restaurant.findMany({
      where: {
        location: {
          name: city,
        },
      },
      select: {
        id: true,
        main_image: true,
        name: true,
        slug: true,
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
        price: true,
      },
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
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <Sidebar />
        <div className="w-5/6">
          <RestaurantsList list={restaurants} />
        </div>
      </div>
    </>
  );
};

export default SearchPage;

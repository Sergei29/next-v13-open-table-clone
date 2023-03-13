import React from "react";

import { MenuItem } from "@/types";
import { db } from "@/lib";

import Navigation from "../components/Navigation";
import Menu from "../components/Menu";

const fetchRestaurantMenu = async (slug: string): Promise<MenuItem[]> => {
  try {
    const restaurant = await db.restaurant.findUnique({
      where: {
        slug,
      },
      select: {
        items: {
          select: {
            id: true,
            name: true,
            price: true,
            description: true,
          },
        },
      },
    });

    if (!restaurant) {
      throw new Error("not found");
    }

    return restaurant.items;
  } catch (error) {
    throw error;
  }
};

type PageProps = { params: { slug: string } };

const RestaurantMenuPage = async ({ params }: PageProps) => {
  const menuItems = await fetchRestaurantMenu(params.slug);

  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <Navigation name={params.slug} />
        <Menu items={menuItems} />
      </div>
    </>
  );
};

export default RestaurantMenuPage;

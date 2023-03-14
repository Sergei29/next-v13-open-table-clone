import React from "react";

import { fetchRestaurantMenu } from "@/lib";

import Navigation from "../components/Navigation";
import Menu from "../components/Menu";

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

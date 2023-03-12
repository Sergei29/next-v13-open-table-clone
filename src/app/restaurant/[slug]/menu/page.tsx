import React from "react";

import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Menu from "../components/Menu";

type PageProps = { params: { slug: string } };

const RestaurantMenuPage = ({ params }: PageProps): JSX.Element => {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <Navigation name={params.slug} />
        <Menu />
      </div>
    </>
  );
};

export default RestaurantMenuPage;

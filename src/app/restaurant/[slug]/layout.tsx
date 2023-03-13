import React from "react";

import Header from "./components/Header";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const RestaurantLayout = ({ children, params }: Props): JSX.Element => {
  return (
    <>
      <Header name={params.slug} />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </>
  );
};

export default RestaurantLayout;

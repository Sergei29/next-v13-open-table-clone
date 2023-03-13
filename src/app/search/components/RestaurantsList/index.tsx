import React from "react";

import { RestaurantCardType } from "@/types";
import RestaurantCard from "../RestaurantCard";

const Message = ({ children }: { children: React.ReactNode }) => (
  <div className="w-[80%] h-72 m-3 rounded overflow-hidden border flex flex-col justify-center items-center">
    {children}
  </div>
);

interface IProps {
  list: RestaurantCardType[] | null;
  emptyMessage?: string;
}

const RestaurantsList = ({
  list,
  emptyMessage = "No results found",
}: IProps): JSX.Element => (
  <>
    {list ? (
      list.length > 0 ? (
        list.map((currentRestaurant) => (
          <RestaurantCard
            key={currentRestaurant.id}
            restaurant={currentRestaurant}
          />
        ))
      ) : (
        <Message>
          <p>{emptyMessage}</p>
        </Message>
      )
    ) : (
      <Message>
        <h4 className="text-red-700 text-3xl font-bold">
          Oups! An error occurred.
        </h4>
        <p>Hint: fetch error, try to restart your db</p>
      </Message>
    )}
  </>
);

export default RestaurantsList;

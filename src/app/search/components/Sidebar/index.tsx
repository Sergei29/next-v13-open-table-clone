import React from "react";

import { Location, Cuisine } from "@/types";
import List from "./List";

interface IProps {
  locationsList: Location[] | null;
  cuisineList: Cuisine[] | null;
}

const Sidebar = ({ locationsList, cuisineList }: IProps): JSX.Element => {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        <List list={locationsList} />
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        <List list={cuisineList} />
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="border w-full text-reg font-light rounded-l p-2">
            $
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2">
            $$
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

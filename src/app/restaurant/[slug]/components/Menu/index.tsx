import React from "react";

import { MenuItem } from "@/types";
import MenuCard from "../MenuCard";

type Props = {
  items: MenuItem[];
};

const Menu = ({ items }: Props): JSX.Element => {
  return (
    <div className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          {items.length > 0 ? (
            items.map((currentItem) => (
              <MenuCard key={currentItem.id} menuItem={currentItem} />
            ))
          ) : (
            <p>no menu available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;

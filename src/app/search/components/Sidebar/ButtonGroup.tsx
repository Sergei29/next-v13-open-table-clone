"use client";

import React from "react";

import { PriceRange } from "@/types";
import { classnames } from "@/lib";

const { CHEAP, REGULAR, EXPENSIVE } = PriceRange;

interface IProps {
  handleButtonClick: (price: PriceRange) => void;
  selectedPrice?: PriceRange | null;
}

const ButtonGroup = ({
  handleButtonClick,
  selectedPrice,
}: IProps): JSX.Element => {
  return (
    <div className="flex">
      <button
        className={classnames(
          "border w-full text-reg font-light rounded-l p-2",
          selectedPrice === CHEAP && "bg-red-700"
        )}
        onClick={() => handleButtonClick(CHEAP)}
      >
        $$
      </button>
      <button
        className={classnames(
          "border-r border-t border-b w-full text-reg font-light p-2",
          selectedPrice === REGULAR && "bg-red-700"
        )}
        onClick={() => handleButtonClick(REGULAR)}
      >
        $$$
      </button>
      <button
        className={classnames(
          "border-r border-t border-b w-full text-reg font-light p-2 rounded-r",
          selectedPrice === EXPENSIVE && "bg-red-700"
        )}
        onClick={() => handleButtonClick(EXPENSIVE)}
      >
        $$$$
      </button>
    </div>
  );
};

export default ButtonGroup;

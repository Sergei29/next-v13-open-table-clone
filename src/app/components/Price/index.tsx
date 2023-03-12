import React, { ComponentProps } from "react";

import { PriceRange } from "@/types";

const { CHEAP, REGULAR, EXPENSIVE } = PriceRange;

const priceRange = {
  [CHEAP]: (
    <>
      <span>$$</span>
      <span className="text-gray-400">$$</span>
    </>
  ),
  [REGULAR]: (
    <>
      <span>$$$</span>
      <span className="text-gray-400">$</span>
    </>
  ),
  [EXPENSIVE]: <span>$$$$</span>,
};

type Props = {
  price: PriceRange;
} & ComponentProps<"p">;

const Price = ({ price, ...restParagraphProps }: Props): JSX.Element => {
  return <p {...restParagraphProps}>{priceRange[price]}</p>;
};

export default Price;

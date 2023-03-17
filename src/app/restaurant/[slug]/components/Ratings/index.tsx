import React from "react";

import { getRatingStars, calculateRatingAverage } from "@/lib";
import Stars from "@/app/components/Stars";

type Props = {
  ratings: number[];
};

const Ratings = ({ ratings }: Props): JSX.Element => {
  const avarageRating = calculateRatingAverage(ratings);
  const count = ratings.length;

  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <Stars rating={avarageRating} />
        <p className="text-reg ml-3">{avarageRating}</p>
      </div>
      <div>
        <p className="text-reg ml-4">
          {count ? `${count} Review${count > 1 ? "s" : ""}` : "No reviews yet"}
        </p>
      </div>
    </div>
  );
};

export default Ratings;

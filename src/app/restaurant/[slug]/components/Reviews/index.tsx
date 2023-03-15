import React from "react";

import { ReviewDetails } from "@/types";

import ReviewCard from "../ReviewCard";

type Props = {
  reviews?: ReviewDetails[];
};

const Reviews = ({ reviews }: Props): JSX.Element => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
        {reviews?.length
          ? `What ${reviews.length} people are saying`
          : "No reviews yet"}
      </h1>
      <div>
        {reviews &&
          reviews.map((currentReview) => (
            <ReviewCard key={currentReview.id} review={currentReview} />
          ))}
      </div>
    </div>
  );
};

export default Reviews;

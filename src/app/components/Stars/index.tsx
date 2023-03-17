import React, { ComponentProps } from "react";
import Image from "next/image";

import emptyStar from "../../../../public/icons/empty-star.png";
import halfStar from "../../../../public/icons/half-star.png";
import fullStar from "../../../../public/icons/full-star.png";

import { classnames } from "@/lib";

const MAX_STARS_NUMBER = 5;
const STAR_SIZE = 20;

const getArray = (count: number) =>
  count > 0 ? Array.from(Array(count).keys()) : [];

/**
 * @description calculates how many full, half and empty stars to be displayed
 * @param {number} ratingFloat average rating float value
 * @returns {object} object bearing full, half and empty counts
 */
const calculateStarTypes = (ratingFloat: number) => {
  const full = Math.floor(ratingFloat);
  const half = ratingFloat - full > 0 ? 1 : 0;
  const empty = MAX_STARS_NUMBER - full - half;

  return { full, half, empty };
};

interface IProps extends Omit<ComponentProps<"div">, "children"> {
  rating: number;
  starSize?: number;
}

const Stars = ({
  rating,
  starSize = STAR_SIZE,
  className,
  ...restDivProps
}: IProps): JSX.Element => {
  const { full, half, empty } = calculateStarTypes(rating);

  return (
    <div
      className={classnames(`flex gap-1 w-[${starSize * 5 + 25}px]`, className)}
      {...restDivProps}
    >
      {getArray(full).map((id) => (
        <Image
          key={id}
          src={fullStar}
          alt="full star"
          width={starSize}
          height={starSize}
        />
      ))}
      {half === 1 && (
        <Image
          src={halfStar}
          alt="half star"
          width={starSize}
          height={starSize}
        />
      )}
      {getArray(empty).map((id) => (
        <Image
          key={id}
          src={emptyStar}
          alt="empty star"
          width={starSize}
          height={starSize}
        />
      ))}
    </div>
  );
};

export default Stars;

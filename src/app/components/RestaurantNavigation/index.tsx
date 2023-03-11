import React from "react";
import Link from "next/link";

type Props = {
  name: string;
};

const RestaurantNavigation = ({ name }: Props): JSX.Element => {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link
        href={`/restaurant/${name}`}
        as={`/restaurant/${name}`}
        className="mr-7"
      >
        Overview
      </Link>
      <Link
        href={`/restaurant/${name}/menu`}
        as={`/restaurant/${name}/menu`}
        className="mr-7"
      >
        Menu
      </Link>
    </nav>
  );
};

export default RestaurantNavigation;

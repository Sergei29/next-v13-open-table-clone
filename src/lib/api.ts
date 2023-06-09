import { notFound } from "next/navigation";

import {
  RestaurantCardType,
  RestaurantDetailsType,
  MenuItem,
  Location,
  Cuisine,
  PriceRange,
} from "@/types";
import { db } from "@/lib";

const SELECT_RESTAURANT_SUMMARY = {
  id: true,
  main_image: true,
  name: true,
  slug: true,
  price: true,
  cuisine: {
    select: {
      id: true,
      name: true,
    },
  },
  location: {
    select: {
      id: true,
      name: true,
    },
  },
  reviews: {
    select: {
      id: true,
      rating: true,
    },
  },
};

interface IFilterParams {
  city?: string;
  cuisine?: string;
  price?: PriceRange;
}
export const fetchRestaurantByLocation = async ({
  city,
  cuisine,
  price,
}: IFilterParams): Promise<RestaurantCardType[] | null> => {
  try {
    if (!city) {
      return await db.restaurant.findMany({
        select: SELECT_RESTAURANT_SUMMARY,
      });
    }
    const filterParams: Record<string, any> = {
      location: {
        name: {
          equals: city,
        },
      },
    };
    if (cuisine) {
      filterParams.cuisine = {
        name: { equals: cuisine },
      };
    }
    if (price) {
      filterParams.price = {
        equals: price,
      };
    }

    const restaurantsFound = await db.restaurant.findMany({
      where: filterParams,
      select: SELECT_RESTAURANT_SUMMARY,
    });

    return restaurantsFound;
  } catch (error) {
    return null;
  }
};

export const fetchRestaurantDetails = async (
  slug: string
): Promise<RestaurantDetailsType> => {
  try {
    const found = await db.restaurant.findUnique({
      where: {
        slug,
      },
      select: {
        id: true,
        name: true,
        description: true,
        slug: true,
        images: true,
        location: { select: { id: true, name: true } },
        reviews: {
          select: {
            id: true,
            first_name: true,
            last_name: true,
            text: true,
            rating: true,
          },
        },
      },
    });

    if (!found) {
      notFound();
    }

    return found;
  } catch (error) {
    throw error;
  }
};

export const fetchRestaurantMenu = async (
  slug: string
): Promise<MenuItem[]> => {
  try {
    const restaurant = await db.restaurant.findUnique({
      where: {
        slug,
      },
      select: {
        items: {
          select: {
            id: true,
            name: true,
            price: true,
            description: true,
          },
        },
      },
    });

    if (!restaurant) {
      throw new Error("not found");
    }

    return restaurant.items;
  } catch (error) {
    throw error;
  }
};

export const fetchRestaurants = async (): Promise<
  RestaurantCardType[] | null
> => {
  try {
    const allRestaurants = await db.restaurant.findMany({
      select: SELECT_RESTAURANT_SUMMARY,
    });

    return allRestaurants;
  } catch (error) {
    return null;
  }
};

export const fetchLocationsList = async (): Promise<Location[] | null> => {
  try {
    const locations = await db.location.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return locations;
  } catch (error) {
    return null;
  }
};

export const fetchCuisineList = async (): Promise<Cuisine[] | null> => {
  try {
    const cuisineList = await db.cuisine.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return cuisineList;
  } catch (error) {
    return null;
  }
};

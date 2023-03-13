import { PriceRange } from "@prisma/client";
export { PriceRange } from "@prisma/client";

export interface Location {
  id: string;
  name: string;
}

export interface Cuisine {
  id: string;
  name: string;
}
export interface RestaurantCardType {
  id: string;
  main_image: string;
  name: string;
  slug: string;
  cuisine: Cuisine;
  location: Location;
  price: PriceRange;
}

export interface RestaurantDetailsType {
  id: string;
  name: string;
  description: string;
  slug: string;
  images: string[];
}

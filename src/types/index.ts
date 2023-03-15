import {
  PriceRange,
  Item,
  Cuisine as CuisinePrisma,
  Location as LocationPrisma,
  Review as ReviewPrisma,
} from "@prisma/client";

export { PriceRange } from "@prisma/client";

export type MenuItem = Pick<Item, "id" | "name" | "description" | "price">;

export type Location = Pick<LocationPrisma, "id" | "name">;

export type Cuisine = Pick<CuisinePrisma, "id" | "name">;
export interface RestaurantCardType {
  id: string;
  main_image: string;
  name: string;
  slug: string;
  cuisine: Cuisine;
  location: Location;
  price: PriceRange;
  reviews?: Pick<ReviewPrisma, "id" | "rating">[];
}

export type ReviewDetails = Pick<
  ReviewPrisma,
  "id" | "rating" | "first_name" | "last_name" | "text"
>;
export interface RestaurantDetailsType {
  id: string;
  name: string;
  description: string;
  slug: string;
  images: string[];
  reviews?: ReviewDetails[];
}

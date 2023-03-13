import { PriceRange, Item, Cuisine, Location } from "@prisma/client";

export { PriceRange } from "@prisma/client";

export type MenuItem = Pick<Item, "id" | "name" | "description" | "price">;
export interface RestaurantCardType {
  id: string;
  main_image: string;
  name: string;
  slug: string;
  cuisine: Pick<Cuisine, "id" | "name">;
  location: Pick<Location, "id" | "name">;
  price: PriceRange;
}

export interface RestaurantDetailsType {
  id: string;
  name: string;
  description: string;
  slug: string;
  images: string[];
}

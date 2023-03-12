import { PriceRange } from "@prisma/client";
export { PriceRange } from "@prisma/client";

export interface RestaurantCardType {
  id: string;
  main_image: string;
  name: string;
  slug: string;
  cuisine: {
    id: string;
    name: string;
  };
  location: {
    id: string;
    name: string;
  };
  price: PriceRange;
}

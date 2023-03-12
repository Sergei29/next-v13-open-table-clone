import HomePageHeader from "@/app/components/HomePageHeader";
import RestaurantCard from "@/app/components/RestaurantCard";
import { RestaurantCardType } from "@/types";
import { db } from "@/lib";

const fetchRestaurants = async (): Promise<RestaurantCardType[] | null> => {
  try {
    const allRestaurants = await db.restaurant.findMany({
      select: {
        id: true,
        main_image: true,
        name: true,
        slug: true,
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
        price: true,
      },
    });

    return allRestaurants;
  } catch (error) {
    return null;
  }
};

const HomePage = async () => {
  const restaurants = await fetchRestaurants();

  return (
    <>
      <HomePageHeader />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants &&
          restaurants.map((currentRestaurant) => (
            <RestaurantCard
              key={currentRestaurant.id}
              restaurant={currentRestaurant}
            />
          ))}
      </div>
    </>
  );
};

export default HomePage;

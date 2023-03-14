import HomePageHeader from "@/app/components/HomePageHeader";
import RestaurantCard from "@/app/components/RestaurantCard";
import { fetchRestaurants } from "@/lib";

const HomePage = async () => {
  const restaurants = await fetchRestaurants();

  return (
    <>
      <HomePageHeader />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants ? (
          restaurants.map((currentRestaurant) => (
            <RestaurantCard
              key={currentRestaurant.id}
              restaurant={currentRestaurant}
            />
          ))
        ) : (
          <div className="w-[80%] h-72 m-3 rounded overflow-hidden border flex flex-col justify-center items-center">
            <h4 className="text-red-700 text-3xl font-bold">
              Oups! An error occurred.
            </h4>
            <p>Hint: fetch error, try to restart your db</p>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;

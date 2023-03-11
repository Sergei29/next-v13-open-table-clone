import HomePageHeader from "@/app/components/HomePageHeader";
import RestaurantCard from "@/app/components/RestaurantCard";

const HomePage = () => {
  return (
    <>
      <HomePageHeader />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        <RestaurantCard />
      </div>
    </>
  );
};

export default HomePage;

import { Inter } from "@next/font/google";
import Link from "next/link";

import Navigation from "@/app/components/Navigation";
import SearchBar from "@/app/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-screen">
      <div className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <Navigation />
        {/* NAVBAR */}
        <main>
          {/* HEADER */}
          <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="text-center mt-10">
              <h1 className="text-white text-5xl font-bold mb-2">
                Find your table for any occasion
              </h1>
              {/* SEARCH BAR */}
              <SearchBar />
              {/* SEARCH BAR */}
            </div>
          </div>
          {/* HEADER */} {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            {/* CARD */}
            <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
              <Link href="/restaurant/milestones-grill">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
                  alt=""
                  className="w-full h-36"
                />
                <div className="p-1">
                  <h3 className="font-bold text-2xl mb-2">Milestones Grill</h3>
                  <div className="flex items-start">
                    <div className="flex mb-2">*****</div>
                    <p className="ml-2">77 reviews</p>
                  </div>
                  <div className="flex text-reg font-light capitalize">
                    <p className=" mr-3">Mexican</p>
                    <p className="mr-3">$$$$</p>
                    <p>Toronto</p>
                  </div>
                  <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
                </div>
              </Link>
            </div>
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </div>
    </div>
  );
};

export default Home;

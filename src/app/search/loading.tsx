import React from "react";

import Header from "./components/Header";

interface IProps {
  [x: string]: unknown;
}

const LoadingHomepage = ({}: IProps): JSX.Element => {
  return (
    <main>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start gap-4">
        <div className="w-1/5">
          <div className="border-b pb-4">
            <h1 className="mb-2">Region</h1>
            {[1, 2, 3].map((num) => (
              <p
                key={num}
                className="h-4 w-20 mb-2 text-reg capitalize cursor-pointer animate-pulse bg-slate-200 "
              ></p>
            ))}
          </div>
          <div className="border-b pb-4">
            <h1 className="mb-2">Cuisine</h1>
            {[1, 2, 3].map((num) => (
              <p
                key={num}
                className="h-4 w-20 mb-2 text-reg capitalize cursor-pointer animate-pulse bg-slate-200 "
              ></p>
            ))}
          </div>
          <div className="border-b pb-4">
            <h1 className="mb-2">Price</h1>
            <div className="h-6 mb-2 text-reg capitalize cursor-pointer animate-pulse bg-slate-200 "></div>
          </div>
        </div>
        <div className="w-5/6 flex flex-col gap-6">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="border-b pb-5 h-[160px] animate-pulse bg-slate-200 rounded"
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default LoadingHomepage;

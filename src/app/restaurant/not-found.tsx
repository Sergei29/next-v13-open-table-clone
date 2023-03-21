"use client";

import React from "react";
import Image from "next/image";

import errorImage from "../../../public/icons/error.png";

interface IProps {
  [x: string]: any;
}

const NotFoundRestaurantPage = ({ error }: IProps): JSX.Element => {
  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
      <Image src={errorImage} alt="error" className="w-56 mb-8" />
      <div className="bg-white px-9 py-14 shadow rounded">
        <h3 className="text-3xl font-bold">Oups, we are sorry!</h3>
        <p className="text-reg font-bold">Page not found</p>
        <p className="mt-6 text-sm font-light">Status code: 404</p>
      </div>
    </div>
  );
};

export default NotFoundRestaurantPage;

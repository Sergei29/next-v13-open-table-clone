import React from "react";

const formatSlugToTitle = (slug: string) => {
  const words = slug.split("-");
  const location = words.pop();

  return `${words.join(" ")} (${location})`;
};

type Props = {
  name: string;
};

const Header = ({ name }: Props): JSX.Element => {
  return (
    <div className="h-96 overflow-hidden">
      <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
        <h1 className="text-7xl text-white capitalize text-shadow text-center">
          {formatSlugToTitle(name)}
        </h1>
      </div>
    </div>
  );
};

export default Header;

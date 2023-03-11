import React from "react";

type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props): JSX.Element => {
  return (
    <div className="mt-4 border-b pb-6">
      <h1 className="font-bold text-6xl">{children}</h1>
    </div>
  );
};

export default Title;

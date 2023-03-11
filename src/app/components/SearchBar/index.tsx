"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const isValid = (value: string) => {
  if (!value.trim() || value === "banana") {
    return false;
  }

  return true;
};

type Props = {};

const SearchBar = ({}: Props): JSX.Element => {
  const router = useRouter();
  const [location, setLocation] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleSubmit = () => {
    if (!isValid(location)) return;
    router.push(`/search?${location}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== "Enter") return;
    handleSubmit();
  };

  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSubmit}
        className="rounded bg-red-600 px-9 py-2 text-white"
      >
        Let&lsquo;s go
      </button>
    </div>
  );
};

export default SearchBar;

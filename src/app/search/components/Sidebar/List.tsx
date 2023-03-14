"use client";

import React from "react";

interface IListProps {
  list:
    | {
        id: string;
        name: string;
      }[]
    | null;
  handleItemClick: (itemName: string) => void;
}

const List = ({ list, handleItemClick }: IListProps) => (
  <>
    {list?.length ? (
      list.map(({ id, name }) => (
        <p
          key={id}
          className="font-light text-reg capitalize cursor-pointer"
          onClick={() => handleItemClick(name)}
        >
          {name}
        </p>
      ))
    ) : (
      <p className="font-light text-reg">no information</p>
    )}
  </>
);

export default List;

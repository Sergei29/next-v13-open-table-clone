"use client";

import React from "react";

import { classnames } from "@/lib";

const activeClassname = "underline text-red-700";
interface IListProps {
  list:
    | {
        id: string;
        name: string;
      }[]
    | null;
  handleItemClick: (itemName: string) => void;
  selectedItem: string | null | undefined;
}

const List = ({ list, handleItemClick, selectedItem }: IListProps) => (
  <>
    {list?.length ? (
      list.map(({ id, name }) => (
        <p
          key={id}
          className={classnames(
            "font-light text-reg capitalize cursor-pointer",
            selectedItem === name && activeClassname
          )}
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

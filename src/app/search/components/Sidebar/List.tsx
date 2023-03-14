import React from "react";

interface IListProps {
  list:
    | {
        id: string;
        name: string;
      }[]
    | null;
}

const List = ({ list }: IListProps) => (
  <>
    {list?.length ? (
      list.map(({ id, name }) => (
        <p key={id} className="font-light text-reg capitalize">
          {name}
        </p>
      ))
    ) : (
      <p className="font-light text-reg">no information</p>
    )}
  </>
);

export default List;

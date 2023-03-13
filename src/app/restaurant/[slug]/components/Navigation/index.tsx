"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { classnames } from "@/lib";
const activeClassname = "border-b-4 border-[#0f1f47]";

type Props = {
  name: string;
};

const Navigation = ({ name }: Props): JSX.Element => {
  const pathname = usePathname();

  return (
    <nav className="flex text-reg border-b pb-2">
      <Link
        href={`/restaurant/${name}`}
        as={`/restaurant/${name}`}
        className={classnames(
          "mr-7",
          pathname === `/restaurant/${name}` && activeClassname
        )}
      >
        Overview
      </Link>
      <Link
        href={`/restaurant/${name}/menu`}
        as={`/restaurant/${name}/menu`}
        className={classnames(
          "mr-7",
          pathname === `/restaurant/${name}/menu` && activeClassname
        )}
      >
        Menu
      </Link>
    </nav>
  );
};

export default Navigation;

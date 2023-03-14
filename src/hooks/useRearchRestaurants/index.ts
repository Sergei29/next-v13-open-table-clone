import { useRouter, useSearchParams, usePathname } from "next/navigation";

import { PriceRange } from "@/types";

export const KEYS = {
  LOCATION: "city",
  CUISINE: "cuisine",
  PRICE: "price",
} as const;

interface IHookReturnType {
  location: string | null | undefined;
  cuisine: string | null | undefined;
  price: PriceRange | null | undefined;
  setQueryParams: (key: string, value?: string) => void;
}

const useRearchRestaurants = (): IHookReturnType => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setQueryParams = (key: string, value?: string) => {
    const params = new URLSearchParams(searchParams || undefined);
    value ? params.set(key, value) : params.delete(key);
    router.replace(`${pathname}?${params}`);
  };

  return {
    location: searchParams?.get(KEYS.LOCATION),
    cuisine: searchParams?.get(KEYS.CUISINE),
    price: searchParams?.get(KEYS.PRICE) as PriceRange | null | undefined,

    setQueryParams,
  };
};

export default useRearchRestaurants;

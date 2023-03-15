export const classnames = (...maybeClassNames: unknown[]) =>
  maybeClassNames
    .filter((currentClassname) => {
      return typeof currentClassname === "string" && !!currentClassname;
    })
    .join(" ");

export const isServer = () => typeof window === "undefined";

export const calculateReviewRatingAverage = (
  ratings?: Record<string, any> & { rating: number }[]
) => {
  if (!ratings?.length) return 0;

  const averageFloat =
    ratings
      .map((current) => current.rating)
      .reduce((total, current) => total + current, 0) / ratings.length;

  return parseFloat(averageFloat.toFixed(2));
};

export const getRatingStars = (rating: number) => {
  if (rating > 4) return "*****";
  if (rating > 3 && rating <= 4) {
    return "****";
  }
  if (rating > 0 && rating <= 3) {
    return "***";
  }
  return "";
};

export const getRatingText = (rating: number) => {
  if (rating > 4) return "Awesome";
  if (rating > 3 && rating <= 4) {
    return "Good";
  }
  if (rating > 0 && rating <= 3) {
    return "Average";
  }
  return "";
};

export const classnames = (...maybeClassNames: unknown[]) =>
  maybeClassNames
    .filter((currentClassname) => {
      return typeof currentClassname === "string" && !!currentClassname;
    })
    .join(" ");

export const isServer = () => typeof window === "undefined";

export const calculateRatingAverage = (ratings?: number[]) => {
  if (!ratings?.length) return 0;

  const averageFloat =
    ratings.reduce((total, current) => total + current, 0) / ratings.length;

  return parseFloat(averageFloat.toFixed(1));
};

export const calculateReviewRatingAverage = (
  ratings?: Record<string, any> & { rating: number }[]
) => {
  if (!ratings) return 0;
  return calculateRatingAverage(ratings.map((current) => current.rating));
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

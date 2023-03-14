export const classnames = (...maybeClassNames: unknown[]) =>
  maybeClassNames
    .filter((currentClassname) => {
      return typeof currentClassname === "string" && !!currentClassname;
    })
    .join(" ");

export const isServer = () => typeof window === "undefined";

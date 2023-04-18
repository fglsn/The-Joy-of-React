import React from "react";

export const FavouriteColorContext = React.createContext();

//When passing an object or array through context, always memoize it with useMemo.

function FavouriteColorProvider({ children }) {
  const [favouriteColor, setFavouriteColor] = React.useState("#EBDEFB");

  const value = React.useMemo(() => {
    return { favouriteColor, setFavouriteColor };
  }, [favouriteColor]);

  return (
    <FavouriteColorContext.Provider value={value}>
      {children}
    </FavouriteColorContext.Provider>
  );
}

export default FavouriteColorProvider;

import React from "react";

import { FavouriteColorContext } from "./FavouriteColorProvider";

function Counter({ count, setCount }) {
  const { favouriteColor, setFavouriteColor } = React.useContext(
    FavouriteColorContext
  );

  return (
    <div
      className="counter"
      style={{
        backgroundColor: favouriteColor,
      }}
    >
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default React.memo(Counter);


import React from "react";

import { FavouriteColorContext } from "./FavouriteColorProvider";

function ColorPicker() {
  const id = React.useId();

  const { favouriteColor, setFavouriteColor } = React.useContext(
    FavouriteColorContext
  );

  console.log("ColorPicker rendered!");

  return (
    <div className="color-picker">
      <label htmlFor={id}>Select a color:</label>
      <input
        type="color"
        value={favouriteColor}
        onChange={(event) => {
          setFavouriteColor(event.target.value);
        }}
      />
    </div>
  );
}

export default React.memo(ColorPicker);

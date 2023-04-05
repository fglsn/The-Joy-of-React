// use-toggle.js
import React from "react";

function useToggle(initialValue = false) {
  if (typeof initialValue !== "boolean") {
    console.warn("Invalid type for useToggle");
  }

  const [value, setValue] = React.useState(initialValue);

  function toggleValue() {
    setValue((currentValue) => !currentValue);
  }

  return [value, toggleValue];
}

export default useToggle;

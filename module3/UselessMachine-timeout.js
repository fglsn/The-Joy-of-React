import React from "react";

import VisuallyHidden from "./VisuallyHidden";

function UselessMachine() {
  const id = React.useId();
  const [isOn, setIsOn] = React.useState(true);

  React.useEffect(() => {
    if (isOn) return;

    const timeoutId = window.setTimeout(() => {
      console.log("off");
      setIsOn(true);
    }, 500);

    return () => window.clearTimeout(timeoutId);
  }, [isOn]);

  return (
    <>
      <input
        id={id}
        type="checkbox"
        checked={isOn}
        onChange={(event) => {
          setIsOn(event.target.checked);
        }}
      />
      <VisuallyHidden>
        <label htmlFor={id}>Toggle checkbox</label>
      </VisuallyHidden>
    </>
  );
}

export default UselessMachine;

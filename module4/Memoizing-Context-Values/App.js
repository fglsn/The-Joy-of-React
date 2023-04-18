// This App has two independent components:
// the task was to make ColorPicker not re-render when count value is changed
// TO do so, both Counter and ColorPicker should be pure (memo)
// And values passed to FavouriteColorProvider should be memoized too,
// to remember the reference to initial values (instead of creating new 'values' object) and prevent re-render

// When passing an object or array through context, always memoize it with useMemo.

import React from "react";

import FavouriteColorProvider from "./FavouriteColorProvider";
import Counter from "./Counter";
import ColorPicker from "./ColorPicker";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <FavouriteColorProvider>
        <Counter count={count} setCount={setCount} />
        <ColorPicker />
      </FavouriteColorProvider>

      <p>Current count: {count}</p>
    </>
  );
}

export default App;

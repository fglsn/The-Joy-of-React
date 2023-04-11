import React from "react";

function useTime() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    // Effect logic
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      // Cleanup logic
      window.clearInterval(intervalId);
    };
  }, []);

  return time;
}

export default useTime;

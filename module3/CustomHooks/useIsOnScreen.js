import React from "react";

function useIsOnScreen() {
  const [isOnScreen, setIsOnScreen] = React.useState(false);

  const elementRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsOnScreen(entry.isIntersecting);
    });

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return [isOnScreen, elementRef];
}

export default useIsOnScreen;

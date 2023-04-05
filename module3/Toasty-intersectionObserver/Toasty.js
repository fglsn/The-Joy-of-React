import React from "react";

import styles from "./Toasty.module.css";

// https://courses.joshwcomeau.com/joy-of-react/03-hooks/05.05-on-mount-exercises

// Here's how we'd solve this problem using vanilla JS:
// function pureJsVersion() {
//   const wrapperElement = document.querySelector(".toasty-wrapper");

//   const observer = new IntersectionObserver((entries) => {
//     const [entry] = entries;

//     if (entry.isIntersecting) {
//       // Show character
//     } else {
//       // Hide character
//     }
//   });

//   observer.observe(wrapperElement);
// }

function Toasty() {
  // The goal is to update the `isShown` state variable,
  // based on the user's scroll position, using
  // IntersectionObserver.
  const [isShown, setIsShown] = React.useState(false);
  const wrapperRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsShown(entry.isIntersecting);
    });

    observer.observe(wrapperRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // This CSS value will control whether the ghost is
  // visible or not.
  const translateX = isShown ? "0%" : "100%";

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div
        className={styles.character}
        style={{
          transform: `translateX(${translateX})`,
        }}
      >
        👻
      </div>
    </div>
  );
}

export default Toasty;

// External libraries
import React from "react";

export function useScrollDirection() {
  const [direction, setDirection] = React.useState<"up" | "down">("up");

  React.useEffect(() => {
    let prevScrollY = 0;

    const handleScroll = () => {
      // Compare to previous position and set the direction
      const { scrollY } = window;
      const direction = prevScrollY < scrollY ? "down" : "up";
      prevScrollY = scrollY;
      setDirection(direction);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return { scrollDir: direction };
}

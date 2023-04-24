// External libraries
import React from "react";

/**
 * Watches user scrolls for a change in direction.
 *
 * @param options Options for this hook.
 * @param options.disabled Disable the check, always return up.
 *
 * @returns The direction the user is scrolling.
 */
export function useScrollDirection(options?: Partial<{ disabled: boolean }>) {
  const [direction, setDirection] = React.useState<"up" | "down">("up");

  React.useEffect(() => {
    // Don’t perform the check if the hook is disabled
    if (options?.disabled) {
      setDirection("up");
      return;
    }

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Compare to previous position and set the direction
      const { scrollY } = window;
      if (scrollY > lastScrollY) setDirection("down");
      else if (scrollY < lastScrollY) setDirection("up");

      // Mobile/horizontal scrolling handling
      lastScrollY = scrollY <= 0 ? 0 : scrollY;
    };

    // Set/clear event listeners
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [options?.disabled]);

  return direction;
}

/**
 * Matches a media query.
 * @param query The media query to match.
 * @returns `isMatch` — If the media query passed in is true.
 */
export function useMediaQuery(query: string) {
  const [isMatch, setIsMatch] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== isMatch) {
      setIsMatch(media.matches);
    }

    const listener = () => setIsMatch(media.matches);
    media.addEventListener("change", listener);
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [isMatch, query]);

  return { isMatch };
}

const breakpoints = {
  base: 0,
  sm: 600,
  md: 905,
  lg: 1440,
};

/**
 * Watches the window for a change in breakpoint.
 * @returns `atBreakpoint` — The largest breakpoint the user window is at.
 */
export function useBreakpoint(): { atBreakpoint: keyof typeof breakpoints } {
  const { isMatch: isAtSm } = useMediaQuery(`(min-width: ${breakpoints.sm}px)`);
  const { isMatch: isAtMd } = useMediaQuery(`(min-width: ${breakpoints.md}px)`);
  const { isMatch: isAtLg } = useMediaQuery(`(min-width: ${breakpoints.lg}px)`);

  return {
    atBreakpoint: isAtLg ? "lg" : isAtMd ? "md" : isAtSm ? "sm" : "base",
  };
}

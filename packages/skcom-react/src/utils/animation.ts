// External libraries
import {
  AnimationControls,
  BezierDefinition,
  MotionStyle,
  Tween,
  useAnimationControls,
} from "framer-motion";
import React from "react";

/**
 * A hook with duration and easing definitions for use with Framer Motion.
 * The definitions can be used with {@link transition}.
 *
 * @returns An object with durations in `duration` and easing definitions in `easing`.
 */
export function useAnimationConfig() {
  return {
    /**
     * Duration: how long the transition takes.
     */
    duration: {
      short1: 0.05,
      short2: 0.1,
      short3: 0.15,
      short4: 0.2,
      medium1: 0.25,
      medium2: 0.3,
      medium3: 0.35,
      medium4: 0.4,
      long1: 0.45,
      long2: 0.5,
      long3: 0.55,
      long4: 0.6,
      extraLong1: 0.7,
      extraLong2: 0.8,
      extraLong3: 0.9,
      extraLong4: 1,
    },
    /**
     * Easing: the easing definition.
     */
    easing: {
      linear: [0, 0, 1, 1] as BezierDefinition,
      standard: [0.2, 0, 0, 1] as BezierDefinition,
      standardAccelerate: [0.3, 0, 1, 1] as BezierDefinition,
      standardDecelerate: [0, 0, 0, 1] as BezierDefinition,
      emphasized: [0.2, 0, 0, 1] as BezierDefinition,
      emphasizedAccelerate: [0.05, 0.7, 0.1, 1] as BezierDefinition,
      emphasizedDecelerate: [0.3, 0, 0.8, 0.15] as BezierDefinition,
    },
  };
}

/**
 * Create a Framer Motion Tween object from a duration and an easing.
 *
 * @see {@link https://www.framer.com/motion/transition/#tween Framer Motion documentation}
 *
 * @param duration How long the transition takes. Use the `duration` key from {@link useAnimationConfig}.
 * @param easing The easing definition. Use the `easing` key from {@link useAnimationConfig}.
 *
 * @returns A Framer Motion Tween object.
 */
export function transition(
  duration: Tween["duration"],
  easing: Tween["ease"]
): Tween {
  return {
    type: "tween",
    duration,
    ease: easing,
  };
}

/**
 * A hook to control a ripple element within a parent element.
 *
 * Example:
 * ```tsx
 * const { rippleHandles, rippleControls, rippleStyle }
 *   = useRipple(buttonRef);
 *
 * return (
 *   <button {...rippleHandles}>
 *     <span>Button</button>
 *     <motion.span
 *       aria-hidden
 *       initial={{ scale: 0, opacity: 0.36 }}
 *       animate={rippleControls}
 *       className="skc-button__ripple"
 *       style={rippleStyle}
 *     />
 *   </button>
 * );
 * ```
 *
 * @param parentRef The React Reference Object pointing to the parent element of the ripple.
 * @returns Event listeners, animation controls, and styles to put on the ripple `motion` element.
 */
export function useRipple(parentRef: React.MutableRefObject<any>): {
  rippleListeners: {
    onTouchStart: (event: React.TouchEvent) => void;
    onMouseDown: (event: React.MouseEvent) => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
  };
  rippleControls: AnimationControls;
  rippleStyle: MotionStyle;
} {
  const { duration, easing } = useAnimationConfig();

  const rippleControls = useAnimationControls();
  const [diameter, setDiameter] = React.useState(0);
  React.useEffect(() => {
    const button = parentRef.current as any;
    if (!button) return;

    // Read the width and height of the parent element and set the ripple size
    // appropriate for the parent
    setDiameter(
      Math.min(
        Math.max(
          // Use either the width or height of parent element, whichever is
          // bigger
          Math.max(button.clientWidth, button.clientHeight),
          // Minimum diameter of 80px; square element causes the ripple to be
          // less impactful
          80
        ),
        // Maximum diameter of 160px; big element causes the ripple to scale
        // too fast
        160
      )
    );
  }, []);
  const [position, setPosition] = React.useState({ top: "0", left: "0" });

  function calculatePosition(x: number, y: number) {
    const button = parentRef.current as any;
    if (!button) return { top: "0", left: "0" };
    const { top, left } = button.getBoundingClientRect();

    return {
      top: `${y - (top + diameter / 2)}px`,
      left: `${x - (left + diameter / 2)}px`,
    };
  }

  function animateRipple() {
    rippleControls.set({ scale: 0, opacity: 0.36 });
    rippleControls.start({
      scale: 4,
      opacity: 0,
      transition: transition(duration.long4, easing.standard),
    });
  }

  // (@SiravitPhokeed)
  // When an element is tapped, the mouse events are fired after the tap
  // events. We prevent this by keeping track of it the user has already
  // started a touch, and prevent a ripple from starting from the mouse event.
  // We’re supposed to use `preventDefault` here but React said no.
  const [touched, setTouched] = React.useState<boolean>(false);

  return {
    /**
     * Event listeners on the parent element.
     */
    rippleListeners: {
      // Use the tap position to calculate the ripple position and animate it
      onTouchStart: (event: React.TouchEvent) => {
        setTouched(true);
        const touch = event.touches[0];
        setPosition(calculatePosition(touch.clientX, touch.clientY));
        animateRipple();
      },

      // Use the mouse position to calculate the ripple position and animate it
      onMouseDown: (event: React.MouseEvent) => {
        if (touched) {
          setTouched(false);
          return;
        }
        setPosition(calculatePosition(event.clientX, event.clientY));
        animateRipple();
      },

      // On key down, put the ripple in the middle of the Button and animate it
      onKeyDown: (event: React.KeyboardEvent) => {
        // Only allow Enter and Space keys as only those can trigger `onClick`
        if (["Enter", " "].indexOf(event.key) === -1) return;

        // Set the ripple position to the middle of the Button
        const button = parentRef.current as any;
        if (!button) return;
        setPosition({
          top: `${button.clientHeight / 2 - diameter / 2}px`,
          left: `${button.clientWidth / 2 - diameter / 2}px`,
        });

        // Animate ripple
        animateRipple();
      },
    },
    /**
     * Framer Motion animation controls to put on the ripple.
     */
    rippleControls,
    /**
     * Styles to put on the ripple.
     */
    rippleStyle: {
      ...position,
      width: `${diameter}px`,
      height: `${diameter}px`,
    } satisfies React.CSSProperties,
  };
}

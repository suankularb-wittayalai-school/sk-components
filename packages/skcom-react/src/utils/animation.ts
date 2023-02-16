// External libraries
import { BezierDefinition, Tween } from "framer-motion";

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

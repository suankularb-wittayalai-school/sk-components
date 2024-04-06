import { AnimatePresence, motion } from "framer-motion";
import "@suankularb-components/css/dist/css/components/progress.css";
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";
import { StylableFC } from "../../types";

/**
 * A Progress indicates that something is ongoing. It can also indicate how
 * much of that something has been done.
 *
 * @param appearance Progress can be either a loading spinner or a linear loading bar.
 * @param alt A description of the Progress for screen readers, similar to `alt` on `<img>`.
 * @param value The progress percentage (out of 100) of an activity.
 * @param visible If this Progress is visible.
 */
const Progress: StylableFC<{
  /**
   * Progress can be either a loading spinner or a linear loading bar.
   *
   * - Must be `linear` or `circular`.
   * - Keep the appearance consistent for the same actions. For example, if
   *   loading a post uses `linear` in one place, the same action should always
   *   use `linear` elsewhere.
   * - Always required.
   */
  appearance: "linear" | "circular";

  /**
   * A description of the Progress for screen readers, similar to `alt` on
   * `<img>`.
   *
   * - Always required, because a Progress has no significance to screenreaders.
   */
  alt: string;

  /**
   * The progress percentage (out of 100) of an activity.
   *
   * - If undefined, the Progress will be in an indeterminate state.
   * - Optional.
   */
  value?: number;

  /**
   * If this Progress is visible.
   *
   * - Optional.
   */
  visible?: boolean;
}> = ({
  appearance,
  alt,
  value,
  visible,
  element: Element = "div",
  style,
  className,
}) => {
  const { duration, easing } = useAnimationConfig();
  const progressTransition = transition(duration.short2, easing.standard);

  // Linear variant
  const linearProgress = (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={progressTransition}
      className="skc-progress__track"
    >
      <div
        className="skc-progress__indicator"
        style={{ width: value !== undefined ? `${value}%` : undefined }}
      />
      {(value === undefined || value < 100) && (
        <div className="skc-progress__remainder" />
      )}
      <div className="skc-progress__stop" />
    </motion.div>
  );

  // Circular variant
  const circularProgress = (
    <svg className="skc-progress__track" viewBox="0 0 48 48">
      <motion.circle
        initial={{ strokeWidth: 0 }}
        animate={{ strokeWidth: 4 }}
        exit={{ strokeWidth: 0 }}
        transition={progressTransition}
        cx={24}
        cy={24}
        r={22}
        fill="none"
        className="skc-progress__remainder"
      />
      <motion.circle
        initial={{ strokeWidth: 0 }}
        animate={{
          strokeWidth: 4,
          strokeDashoffset:
            value !== undefined ? 200 - value * 1.25 : undefined,
        }}
        exit={{ strokeWidth: 0 }}
        transition={progressTransition}
        cx={24}
        cy={24}
        r={22}
        fill="none"
        className="skc-progress__indicator"
      />
    </svg>
  );

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <Element
          role="progressbar"
          aria-label={alt}
          aria-valuenow={value}
          style={style}
          className={cn(
            "skc-progress",
            {
              linear: "skc-progress--linear",
              circular: "skc-progress--circular",
            }[appearance],
            value === undefined && "skc-progress--indeterminate",
            className,
          )}
        >
          {{ linear: linearProgress, circular: circularProgress }[appearance]}
        </Element>
      )}
    </AnimatePresence>
  );
};

Progress.displayName = "Progress";

export default Progress;

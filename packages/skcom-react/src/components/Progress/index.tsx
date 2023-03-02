// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/progress.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link Progress}.
 */
export interface ProgressProps extends SKComponent {
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
}

/**
 * A Progress indicates that something is ongoing. It can also indicate how
 * much of that something has been done.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.12x5jav7hhzm SKCom documentation}
 *
 * @param appearance Progress can be either a loading spinner or a linear loading bar.
 * @param alt A description of the Progress for screen readers, similar to `alt` on `<img>`.
 * @param value The progress percentage (out of 100) of an activity.
 */
export function Progress({
  appearance,
  alt,
  value,
  style,
  className,
}: ProgressProps) {
  const linearProgress = (
    <div className="skc-progress__track">
      <div
        className="skc-progress__indicator"
        style={{ width: value !== undefined ? `${value}%` : undefined }}
      />
    </div>
  );
  const circularProgress = (
    <svg className="skc-progress__track" viewBox="24 24 48 48">
      <circle
        className="skc-progress__indicator"
        style={{
          strokeDashoffset:
            value !== undefined ? 200 - value * 1.25 : undefined,
        }}
        cx="48"
        cy="48"
        r="20"
        fill="none"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
    </svg>
  );

  return (
    <div
      role="progressbar"
      aria-label={alt}
      style={style}
      className={cn([
        "skc-progress",
        appearance === "linear"
          ? "skc-progress--linear"
          : appearance === "circular" && "skc-progress--circular",
        value === undefined && "skc-progress--indeterminate",
        className,
      ])}
    >
      {appearance === "linear"
        ? linearProgress
        : appearance === "circular" && circularProgress}
    </div>
  );
}

Progress.displayName = "Progress";

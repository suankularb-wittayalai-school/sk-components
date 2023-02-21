// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/segmented-button.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link SegmentedButton Segmented Button}.
 */
export interface SegmentedButtonProps extends SKComponent {
  /**
   * 2-5 Buttons.
   *
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * A description of the Segmented Button for screen readers, similar to `alt`
   * on `<img>`.
   *
   * - Always required
   */
  alt: string;

  /**
   * A lower number means a more dense interface. In this case, less height.
   *
   * - Must be an integer: 0, -1, -2, or -3.
   * - Optional.
   */
  density?: 0 | -1 | -2 | -3;

  /**
   * Each Button will be equal in width.
   *
   * - Optional.
   */
  full?: boolean;
}

/**
 * Segmented Button combines multiple related Buttons together. Each Button in a Segmented Button can be toggled on and off.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.c0vieg8cftmq SKCom documentation}
 *
 * @param children 2-5 Buttons.
 * @param alt A description of the Segmented Button for screen readers, similar to `alt` on `<img>`.
 * @param density A lower number means a more dense interface. In this case, less height.
 * @param full Each Button will be equal in width.
 */
export function SegmentedButton({
  children,
  alt,
  density,
  full,
  style,
  className,
}: SegmentedButtonProps) {
  return (
    <div
      style={style}
      className={cn([
        "skc-segmented-button",
        density == 0
          ? "skc-segmented-button--density-0"
          : density !== undefined
          ? `skc-segmented-button--density-[${density}]`
          : undefined,
        full && "skc-segmented-button--full",
        className,
      ])}
      role="group"
      aria-label={alt}
    >
      {children}
    </div>
  );
}

SegmentedButton.displayName = "SegmentedButton";

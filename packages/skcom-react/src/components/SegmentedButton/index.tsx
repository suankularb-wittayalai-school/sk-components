import "@suankularb-components/css/dist/css/components/segmented-button.css";
import { ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";

/**
 * Segmented Button combines multiple related Buttons together. Each Button in a
 * Segmented Button can be toggled on and off.
 *
 * @param children 2-5 Buttons.
 * @param alt A description of the Segmented Button for screen readers, similar to `alt` on `<img>`.
 * @param density A lower number means a more dense interface. In this case, less height.
 * @param full Each Button will be equal in width.
 */
const SegmentedButton: StylableFC<{
  /**
   * 2-5 Buttons.
   *
   * - Always required.
   */
  children: ReactNode;

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
}> = ({
  children,
  alt,
  density = 0,
  full,
  element: Element = "div",
  style,
  className,
}) => (
  <Element
    aria-label={alt}
    role="group"
    style={style}
    className={cn(
      "skc-segmented-button",
      density === 0
        ? "skc-segmented-button--density-0"
        : `skc-segmented-button--density-[${density}]`,
      full && "skc-segmented-button--full",
      className,
    )}
  >
    {children}
  </Element>
);

SegmentedButton.displayName = "SegmentedButton";

export default SegmentedButton;

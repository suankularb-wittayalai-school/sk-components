// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/icon.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link MaterialIcon Material Icon}.
 */
export interface MaterialIconProps extends SKComponent {
  /**
   * Material Icon uses the “Material Symbol” font, where each icon has its own
   * corresponding text string. You can find the list of all icons at
   * {@link https://fonts.google.com/icons Google Fonts}.
   *
   * - Always required.
   */
  icon: string;

  /**
   * If the icon is filled or not.
   *
   * - An icon should be outlined by default, filling it should have a specific
   *   meaning, like if a Navigation Bar Item is selected.
   * - Uses the `FILL` font variation setting on the Material Symbol font.
   * - Optional.
   */
  fill?: boolean;

  /**
   * How thick the strokes are.
   *
   * - Keep the weight consistent throughout an application. Hovering/focusing
   *   can affect the weight, however.
   * - Uses the `wght` font variation setting on the Material Symbol font.
   * - Optional.
   */
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;

  /**
   * `grade` also adjusts the icon’s thickness, but more subtly.
   *
   * - A lower grade is used in light icons on a dark background. A higher
   *   grade is used to emphasize an icon.
   * - Uses the `GRAD` font variation setting on the Material Symbol font.
   * - Optional.
   */
  grade?: -25 | 0 | 200;

  /**
   * How large/small the icon is.
   *
   * - Uses the `opsz` font variation setting on the Material Symbol font.
   * - Optional.
   */
  size?: 20 | 24 | 40 | 48;
}

/**
 * Icons are essential to any web design. They orient the users, help user navigate, save space.
 * Material Icon uses the “Material Symbol” icon font from Google.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.17kwuu4el5al SKCom documentation}
 *
 * @param icon Material Icon uses the “Material Symbol” font, where each icon has its own corresponding text string. You can find the list of all icons at {@link https://fonts.google.com/icons Google Fonts}.
 * @param fill If the icon is filled or not.
 * @param weight How thick the strokes are.
 * @param grade `grade` also adjusts the icon’s thickness, but more subtly.
 * @param size How large/small the icon is.
 */
export function MaterialIcon({
  icon,
  fill,
  weight,
  grade,
  size,
  style,
  className,
}: MaterialIconProps) {
  return (
    <i
      aria-hidden="true"
      style={style}
      className={cn([
        "skc-icon",
        fill && "skc-icon--filled",
        weight && `skc-icon--weight-${weight}`,
        grade == -25
          ? "skc-icon--grade-[-25]"
          : grade !== undefined
          ? `skc-icon--grade-${grade}`
          : undefined,
        size && `skc-icon--size-${size}`,
        className,
      ])}
      translate="no"
    >
      {icon}
    </i>
  );
}

MaterialIcon.displayName = "Button";

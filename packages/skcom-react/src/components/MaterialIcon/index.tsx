// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/icon.css";

// Utilities
import { cn } from "../../utils/className";

export interface MaterialIconProps extends SKComponent {
  icon: string;
  fill?: boolean;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  grade?: -25 | 0 | 200;
  size?: 20 | 24 | 40 | 48;
}

/**
 * Icons are essential to any web design. They orient the users, help user navigate, save space.
 * Material Icon uses the “Material Symbol” icon font from Google.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.17kwuu4el5al SKCom documentation}
 *
 * @param icon Material Icon uses the “Material Symbol” font, where each icon has its own corresponding text string. You can find the list of all icons at [Google Fonts](https://fonts.google.com/icons).
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

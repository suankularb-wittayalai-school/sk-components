import "@suankularb-components/css/dist/css/components/material-icon.css";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";

/**
 * Icons are essential to any web design. They orient the users, help user navigate, save space.
 * Material Icon uses the “Material Symbol” icon font from Google.
 *
 * @param icon Material Icon uses the “Material Symbol” font, where each icon has its own corresponding text string. You can find the list of all icons at {@link https://fonts.google.com/icons Google Fonts}.
 * @param fill If the icon is filled or not.
 * @param weight How thick the strokes are.
 * @param grade `grade` also adjusts the icon’s thickness, but more subtly.
 * @param size How large/small the icon is.
 */
const MaterialIcon: StylableFC<{
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
}> = ({
  icon,
  fill,
  weight,
  grade,
  size,
  element: Element = "i",
  style,
  className,
}) => (
  <Element
    aria-hidden="true"
    style={{
      ...style,
      fontSize: size ? `${size / 16}rem` : undefined,
      fontVariationSettings:
        fill || weight || grade || size
          ? `"FILL" ${fill ? 1 : 0}, "wght" ${weight || 400}, "GRAD" ${grade || 0}, "opsz" ${size || 24}`
          : undefined,
    }}
    className={cn(`skc-icon`, className)}
    translate="no"
  >
    {icon}
  </Element>
);

MaterialIcon.displayName = "MaterialIcon";

export default MaterialIcon;

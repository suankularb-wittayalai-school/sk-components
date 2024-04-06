import "@suankularb-components/css/dist/css/components/filter-chip.css";
import { FC, ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";
import Button from "../Button";
import Interactive from "../Interactive";
import MaterialIcon from "../MaterialIcon";

/**
 * A set of Filter Chips provide product-authored options to narrow down
 * content. A Filter Chip should never appear alone and should be a child of
 * Chip Set.
 *
 * @param children The text displayed inside the chip.
 * @param icon An icon can appear before all content in an Filter Chip.
 * @param tooltip A message shown in a tooltip when the user hovers over the Filter Chip.
 * @param elevated Use elevation instead of an outline to signify the Filter Chip’s boundary.
 * @param selected If the Filter Chip is selected.
 * @param disabled Turns the Filter Chip gray and block any action associated with it.
 * @param onToggle Triggers when the user toggles the Filter Chip on or off.
 * @param onMenuToggle Triggers when the user toggles the Menu by clicking the trailing dropdown icon on the Filter Chip.
 * @param menu Turns the Filter Chip into a dropdown, displaying a Menu underneath the chip.
 */
const FilterChip: StylableFC<{
  /**
   * The text displayed inside the chip.
   *
   * - Must be a string or a JSX Element.
   * - Always required.
   */
  children: ReactNode;

  /**
   * An icon can appear before all content in an Filter Chip. In a page with
   * many cards, icons can quickly orient users.
   *
   * - You are encouraged to use Material Icons as the value for `icon`.
   * - Optional.
   */
  icon?: JSX.Element;

  /**
   * A message shown in a tooltip when the user hovers over the Filter Chip.
   *
   * - Optional.
   */
  tooltip?: string;

  /**
   * Use elevation instead of an outline to signify the Filter Chip’s boundary.
   *
   * - Important: do not use this prop if you don’t have to. Only elevate an
   *   Filter Chip when its placement requires visual protection, such as on
   *   top of an image.
   * - Optional.
   */
  elevated?: boolean;

  /**
   * If the Filter Chip is selected. `icon` is replaced with a checkmark if
   * this is `true`.
   *
   * - Optional.
   */
  selected?: boolean;

  /**
   * Turns the Filter Chip gray and block any action associated with it.
   * `onToggle` and `onMenuToggle` will have no effect.
   *
   * - Optional.
   */
  disabled?: boolean;

  /**
   * Triggers when the user toggles the Filter Chip on or off.
   *
   * - Optional.
   */
  onClick?: (state: boolean) => any;

  /**
   * Triggers when the user toggles the Menu by clicking the trailing dropdown
   * icon on the Filter Chip.
   *
   * - Optional.
   */
  onMenuToggle?: () => any;

  /**
   * Turns the Filter Chip into a dropdown, displaying a Menu underneath the
   * chip.
   *
   * - Must be a Menu.
   * - Optional.
   */
  menu?: JSX.Element;
}> = ({
  children,
  icon,
  tooltip,
  elevated,
  selected,
  disabled,
  onClick,
  onMenuToggle,
  menu,
  element,
  style,
  className,
}) => {
  const FilterChip: FC = () => (
    <Interactive
      onClick={onClick && !onMenuToggle ? () => onClick(!selected) : undefined}
      element={element || (onMenuToggle ? "div" : "button")}
      style={style}
      className={cn(
        "skc-filter-chip",
        elevated && "skc-filter-chip--elevated",
        selected && "skc-filter-chip--selected",
        className,
      )}
      attr={{ "aria-disabled": disabled, title: tooltip }}
    >
      {/* Icon */}
      {(icon || selected) && (
        <div className="skc-filter-chip__icon">
          {selected ? <MaterialIcon icon="done" /> : icon}
        </div>
      )}

      {/* Label */}
      {onMenuToggle ? (
        <button
          className="skc-filter-chip__label"
          onClick={() => onClick && onClick(!selected)}
        >
          {children}
        </button>
      ) : (
        <span className="skc-filter-chip__label">{children}</span>
      )}

      {/* Menu toggle */}
      {onMenuToggle && (
        <Button
          appearance="text"
          icon={<MaterialIcon icon="arrow_drop_down" />}
          onClick={onMenuToggle}
        />
      )}
    </Interactive>
  );

  return onMenuToggle ? (
    <div className="skc-filter-chip__anchor">
      <FilterChip />
      {menu}
    </div>
  ) : (
    <FilterChip />
  );
};

FilterChip.displayName = "FilterChip";

export default FilterChip;

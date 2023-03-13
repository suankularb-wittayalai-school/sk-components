// External libraries
import { motion } from "framer-motion";
import * as React from "react";

// Internal components
import { MaterialIcon } from "../MaterialIcon";
import { Menu, MenuProps } from "../Menu";
import { MenuItemProps } from "../MenuItem";

// Styles
import "@suankularb-components/css/dist/css/components/select.css";

// Types
import { SKComponent } from "../../types";

// Utilities
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";
import { kebabify } from "../../utils/format";

/**
 * Props for {@link Select}.
 */
export interface SelectProps extends SKComponent {
  /**
   * The options to select from.
   *
   * - Must be Menu Items, each with `value` defined.
   * - Always required.
   */
  children?: React.ReactNode;

  /**
   * How the Select looks. An outlined Select has a lower emphasis than filled,
   * so it is great for a form with many fields.
   *
   * - Keep the appearance consistent across Selects. Separate different
   *   appearances by region.
   * - Must be `outlined` or `filled`.
   * - Always required.
   */
  appearance: "outlined" | "filled";

  /**
   * The placeholder text (when not focused and no value) and the label text
   * (when focused or has value).
   *
   * - Always required.
   */
  label: string;

  /**
   * A description of the Select for screen readers, similar to `alt` on
   * `<img>`.
   *
   * - Required if `<label>` is a JSX Element.
   */
  alt?: string;

  /**
   * The leading text or icon, aligned to the left.
   *
   * - Optional.
   */
  leading?: string | JSX.Element;

  /**
   * A short description of the Select, or an error message during an error
   * state.
   *
   * - Optional but recommended during an error state.
   */
  helperMsg?: string | JSX.Element;

  /**
   * Allows for translation of the message shown when there are no options.
   *
   * - Must be `th` or `en-US`, as SKCom currently only support those 2
   *   languages.
   * - Optional.
   */
  locale?: "en-US" | "th";

  /**
   * Tells Select that it contains an invalid value and activates the error
   * state.
   *
   * - Optional.
   */
  error?: boolean;

  /**
   * The value of the selected option. This is useful if you want a controlled
   * input.
   *
   * - Must be one of the values entered via the `value` prop of the Menu Items.
   * - Optional.
   */
  value?: any;

  /**
   * This function triggers when the user chooses an option. The value is
   * passed in via the function.
   *
   * - Optional.
   */
  onChange?: (value: any) => any;

  /**
   * Attributes for the underlying Menu component.
   *
   * - Optional.
   */
  menuAttr?: Partial<MenuProps>;
}

/**
 * Sometimes it’s impractical to show all options at a time with a radio group.
 * Select allows the user to choose from options shown on a temporary surface.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.hh9ts22t8gjy SKCom documentation}
 *
 * @param children The options to select from.
 * @param appearance How the Select looks.
 * @param label The label text.
 * @param alt A description of the Select for screen readers, similar to `alt` on `<img>`.
 * @param leading The leading text or icon, aligned to the left.
 * @param helperMsg A short description of the Select, or an error message during an error state.
 * @param locale Allows for translation of the message shown when there are no options.
 * @param error Tells Select that it contains an invalid value and activates the error state.
 * @param value The value of the selected option. This is useful if you want a controlled input.
 * @param onChange This function triggers when the user chooses an option.
 * @param menuAttr Attributes for the underlying Menu component.
 */
export function Select({
  children,
  appearance,
  label,
  alt,
  leading,
  helperMsg,
  locale,
  error,
  value,
  onChange,
  menuAttr,
  style,
  className,
}: SelectProps) {
  const { duration, easing } = useAnimationConfig();

  // Handles toggling options
  const [menuOpen, setMenuOpen] = React.useState<boolean>();
  const [options, setOptions] = React.useState<
    { value: any; label: React.ReactNode }[]
  >([]);

  // Parse Menu passsed in via `children` into an array
  React.useEffect(() => {
    setOptions(
      React.Children.map(children, (child) => ({
        value: ((child as JSX.Element).props as MenuItemProps).value,
        label: ((child as JSX.Element).props as MenuItemProps).children,
      })) || []
    );
  }, [children]);

  // Set the selected option to the first automatically
  React.useEffect(() => {
    if (onChange && options?.length && !value) onChange(options[0].value);
  }, [options]);

  // Accessibility
  const toggleRef: React.LegacyRef<HTMLButtonElement> = React.createRef();
  React.useEffect(() => {
    // `undefined` means the user has not touched this Select yet
    // `false` means the user has just collapsed this Select
    if (menuOpen === false) toggleRef.current?.focus();
  }, [menuOpen]);

  // Generate the base ID for `<label>` and `aria-describedby`
  const selectID = `select-${kebabify(
    (typeof label === "string" ? label : alt)!
  )}`;

  return (
    <div className="skc-select__anchor">
      {/* Options toggle */}
      <button
        ref={toggleRef}
        role="combobox"
        aria-controls={`${selectID}-options`}
        aria-expanded={menuOpen}
        aria-haspopup="listbox"
        aria-labelledby={selectID}
        style={style}
        className={cn([
          "skc-select",
          appearance === "outlined"
            ? "skc-select--outlined"
            : appearance === "filled" && "skc-select--filled",
          error && "skc-select--error",
          className,
        ])}
        onClick={() => options.length && setMenuOpen(!menuOpen)}
      >
        {/* Leading section */}
        {leading && <div className="skc-select__leading">{leading}</div>}

        {/* Label */}
        <label id={selectID} className="skc-select__label">
          {label}
        </label>

        {/* Selected option */}
        <span className="skc-select__value">
          {options.length
            ? // Show the currently selected option
              options.find((option) => value === option.value)?.label ||
              // Show the first option as a fallback
              options[0]?.label
            : // No options
            locale === "th"
            ? "ไม่มีตัวเลือก"
            : "No options"}
        </span>

        {/* Dropdown icon */}
        <motion.div
          className="skc-select__trailing"
          animate={{ rotate: menuOpen ? 180 : 0 }}
          transition={transition(duration.short4, easing.standard)}
        >
          <MaterialIcon icon="arrow_drop_down" />
        </motion.div>

        {/* Helper message */}
        {helperMsg && (
          <span className="skc-select__helper-msg">{helperMsg}</span>
        )}
      </button>

      {/* Options */}
      <Menu
        open={menuOpen}
        density={-4}
        onBlur={() => setMenuOpen(false)}
        ulAttr={{
          id: `${selectID}-options`,
          role: "listbox",
          "aria-labelledby": selectID,
        }}
        {...menuAttr}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child as JSX.Element, {
            selected: value === (child as JSX.Element).props.value,
            onClick: () => {
              if (onChange) onChange((child as JSX.Element).props.value);
              const { onClick } = (child as JSX.Element).props;
              if (onClick) onClick();
              setMenuOpen(false);
            },
          })
        )}
      </Menu>
    </div>
  );
}

Select.displayName = "Select";

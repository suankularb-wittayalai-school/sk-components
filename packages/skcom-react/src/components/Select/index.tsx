// External libraries
import { motion } from "framer-motion";
import * as React from "react";

// Internal components
import { MaterialIcon } from "../MaterialIcon";
import { Menu, MenuProps } from "../Menu";
import { TextFieldProps } from "../TextField";

// Styles
import "@suankularb-components/css/dist/css/components/select.css";

// Utilities
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";
import { kebabify } from "../../utils/format";
import { MenuItemProps } from "../MenuItem";

/**
 * Props for {@link Select}.
 */
export interface SelectProps
  extends Pick<
    TextFieldProps,
    | "appearance"
    | "label"
    | "alt"
    | "leading"
    | "helperMsg"
    | "required"
    | "error"
    | "className"
    | "style"
  > {
  children: React.ReactNode;
  locale?: "en-US" | "th";
  value?: any;
  onChange?: (value: any) => any;
  menuAttr?: Partial<MenuProps>;
}

/**
 * Sometimes it’s impractical to show all options at a time with a radio group.
 * Select allows the user to choose from options shown on a temporary surface.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.hh9ts22t8gjy SKCom documentation}
 *
 * @param children
 * @param appearance
 * @param label
 * @param alt
 * @param leading
 * @param helperMsg
 * @param locale
 * @param required
 * @param error
 * @param value
 * @param onChange
 * @param menuAttr
 */
export function Select({
  children,
  appearance,
  label,
  alt,
  leading,
  helperMsg,
  locale,
  required,
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
  const selectID = `select${kebabify(
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
            : appearance === "filled" && "skc-selected--filled",
          className,
        ])}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {/* Leading section */}
        {leading && <div className="skc-select__leading">{leading}</div>}

        {/* Label */}
        <label id={selectID} className="skc-select__label">
          {label}
        </label>

        {/* Selected option */}
        <span className="skc-select__value">
          {
            // Show the currently selected option
            options.find((option) => value === option.value)?.label ||
              // Show the first option as a fallback
              options[0]?.label
          }
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

      {/* Blur capture area */}
      {menuOpen && (
        <div
          className="skc-select__blur-capture"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}

Select.displayName = "Select";

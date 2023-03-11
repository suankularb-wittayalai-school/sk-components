// External libraries
import * as React from "react";

// Internal components
import { TextFieldProps } from "../TextField";
import { Menu, MenuProps } from "../Menu";

// Styles
import "@suankularb-components/css/dist/css/components/select.css";

// Utilities
import { cn } from "../../utils/className";
import { MaterialIcon } from "../MaterialIcon";
import { motion } from "framer-motion";
import { transition, useAnimationConfig } from "../../utils/animation";

/**
 * Props for {@link Select}.
 */
export interface SelectProps
  extends Pick<
    TextFieldProps,
    | "appearance"
    | "label"
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
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [options, setOptions] = React.useState<
    { value: any; label: React.ReactNode }[]
  >([]);

  // Parse Menu passsed in via `children` into an array
  React.useEffect(() => {
    setOptions(
      React.Children.map(children, (child) => ({
        value: (child as JSX.Element).props.value,
        label: (child as JSX.Element).props.children,
      })) || []
    );
  }, [children]);

  // Set the selected option to the first automatically
  React.useEffect(() => {
    if (onChange && options?.length && !value) onChange(options[0].value);
  }, [options]);

  return (
    <div className="skc-select__anchor">
      {/* Options toggle */}
      <button
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
        <span className="skc-select__label">{label}</span>

        {/* Selected option */}
        <span className="skc-select__value">
          {options.find((option) => value === option.value)?.label ||
            options[0]?.label}
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
      <Menu open={menuOpen} density={-4} {...menuAttr}>
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

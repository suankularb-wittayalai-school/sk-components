import "@suankularb-components/css/dist/css/components/select.css";
import { motion } from "framer-motion";
import { dash } from "radash";
import {
  Children,
  ComponentProps,
  ReactNode,
  Ref,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { LangCode, StylableFC } from "../../types";
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";
import MaterialIcon from "../MaterialIcon";
import Menu from "../Menu";
import MenuItem from "../MenuItem";

/**
 * Sometimes it’s impractical to show all options at a time with a radio group.
 * Select allows the user to choose from options shown on a temporary surface.
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
const Select: StylableFC<{
  /**
   * The options to select from.
   *
   * - Must be Menu Items, each with `value` defined.
   * - Always required.
   */
  children?: ReactNode;

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
  locale?: LangCode;

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
  menuAttr?: Partial<ComponentProps<typeof Menu>>;

  /**
   * This prop is not supported by this component.
   */
  element?: never;
}> = ({
  children,
  appearance,
  label,
  alt,
  leading,
  helperMsg,
  locale = "en-US",
  error,
  value,
  onChange,
  menuAttr,
  style,
  className,
}) => {
  const { duration, easing } = useAnimationConfig();

  // Handles toggling options
  const [menuOpen, setMenuOpen] = useState<boolean>();
  const [options, setOptions] = useState<{ value: any; label: ReactNode }[]>(
    [],
  );

  // Parse Menu passsed in via `children` into an array
  useEffect(() => {
    setOptions(
      Children.map(children, (child) => ({
        value: ((child as JSX.Element).props as ComponentProps<typeof MenuItem>)
          .value,
        label: ((child as JSX.Element).props as ComponentProps<typeof MenuItem>)
          .children,
      })) || [],
    );
  }, [children]);

  // Set the selected option to the first automatically
  useEffect(() => {
    if (onChange && options?.length && !value) onChange(options[0].value);
  }, [options]);

  // Accessibility
  const toggleRef: Ref<HTMLButtonElement> = useRef(null);
  useEffect(() => {
    // `undefined` means the user has not touched this Select yet
    // `false` means the user has just collapsed this Select
    if (menuOpen === false) toggleRef.current?.focus();
  }, [menuOpen]);

  // Generate the base ID for `<label>` and `aria-describedby`
  const selectID = `select-${dash((typeof label === "string" ? label : alt)!)}`;

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
        className={cn(
          "skc-select",
          {
            outlined: "skc-select--outlined",
            filled: "skc-select--filled",
          }[appearance],
          error && "skc-select--error",
          className,
        )}
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
              { "en-US": "No options", th: "ไม่มีตัวเลือก" }[locale]}
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
        {Children.map(children, (child) =>
          cloneElement(child as JSX.Element, {
            selected: value === (child as JSX.Element).props.value,
            onClick: () => {
              onChange?.((child as JSX.Element).props.value);
              const { onClick } = (child as JSX.Element).props;
              onClick?.();
              setMenuOpen(false);
            },
          }),
        )}
      </Menu>
    </div>
  );
};

Select.displayName = "Select";

export default Select;

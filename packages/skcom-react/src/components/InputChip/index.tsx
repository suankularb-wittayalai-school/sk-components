import "@suankularb-components/css/dist/css/components/input-chip.css";
import { Ref, useEffect, useRef, useState } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";
import Button from "../Button";
import Interactive from "../Interactive";
import MaterialIcon from "../MaterialIcon";

/**
 * A Chip displaying a piece of information entered by the user is an Input
 * Chip. This type of Chip can be added, edited, and deleted by the user.
 *
 * Like all Chips, an Input Chip appears alongside other Input Chips, but these
 * can also appear inside a text field like in Chip Field.
 *
 * @param children The text displayed inside the chip.
 * @param avatar An avatar is placed before all content in an Input Chip.
 * @param icon An icon can appear before all content in an Input Chip. In a page with many chips, icons can quickly orient users.
 * @param selected If the Input Chip is selected. `avatar` is replaced with a checkmark if this is `true`.
 * @param onClick Triggers when the user click anywhere in the Input Chip except the delete button.
 * @param href The URL of the page this Input Chip leads to, similar to `href` on `<a>`.
 * @param onDelete Triggers when the user click the delete button.
 * @param editable If the Input Chip can be edited, clicking on it revert it back to the original text, which can be edited normally.
 * @param value The value inside the field that appears after entering edit mode. This is useful if you want a controlled input.
 * @param onChange This function triggers when the user make changes to the field value.
 * @param onEditExit Triggers when the user exit edit mode.
 */
const InputChip: StylableFC<{
  /**
   * The text displayed inside the chip.
   *
   * - Must be a string or a JSX Element.
   * - Always required.
   */
  children: string | JSX.Element;

  /**
   * An avatar is placed before all content in an Input Chip. A use case would
   * be the profile picture of a user.
   *
   * - You are encouraged to use Avatar as the value for `avatar`.
   * - Incompatible with `icon`.
   * - Optional.
   */
  avatar?: JSX.Element;

  /**
   * An icon can appear before all content in an Input Chip. In a page with
   * many chips, icons can quickly orient users.
   *
   * - You are encouraged to use {@link MaterialIcon Material Icons} as the
   *   value for `icon`.
   * - Incompatible with `avatar`.
   * - Optional.
   */
  icon?: JSX.Element;

  /**
   * If the Input Chip is selected. `avatar` is replaced with a checkmark if
   * this is `true`.
   *
   * - Material Guidelines and the guidelines on Chip Field recommend selecting
   *   the Input Chip set to be deleted via backspace, requiring another
   *   backspace to confirm.
   * - Optional.
   */
  selected?: boolean;

  /**
   * Triggers when the user click anywhere in the Input Chip except the delete
   * button.
   *
   * - This is useful if there’s more information on the chip that can be
   *   displayed on click,
   *  {@link https://m3.material.io/components/chips/guidelines#4ebdaf13-08c1-4959-a481-1fc2be2fa1f2 as seen here}.
   * - Optional.
   */
  onClick?: () => any;

  /**
   * The URL of the page this Input Chip leads to, similar to `href` on `<a>`.
   *
   * - Optional.
   */
  href?: string;

  /**
   * Triggers when the user click the delete button.
   *
   * - Optional.
   */
  onDelete?: () => any;

  /**
   * If the Input Chip can be edited, clicking on it revert it back to the
   * original text, which can be edited normally.
   *
   * - Optional.
   */
  editable?: boolean;

  /**
   * The value inside the field that appears after entering edit mode. This is
   * useful if you want a controlled input.
   *
   * - Only available if `editable` is `true`.
   * - Only functional after entering edit mode.
   * - Optional.
   *
   * @see {@link https://reactjs.org/docs/forms.html#controlled-components React documention on controlled input}
   */
  value?: string;

  /**
   * This function triggers when the user make changes to the field value. The
   * value is passed in via the function.
   *
   * - Only available if `editable` is `true`.
   * - Only functional after entering edit mode.
   * - Optional.
   *
   * @param value The value of the text field.
   */
  onChange?: (value: string) => any;

  /**
   * Triggers when the user exit edit mode.
   *
   * - Optional.
   */
  onEditExit?: () => any;
}> = ({
  children,
  avatar,
  icon,
  selected,
  onClick,
  href,
  onDelete,
  editable,
  value,
  onChange,
  onEditExit,
  element,
  style,
  className,
}) => {
  // Editable Chip logic
  const inputRef: Ref<HTMLInputElement> = useRef(null);
  const [editing, setEditing] = useState<boolean>(false);

  /**
   * Expand an `<input>` to just a little longer then required to fit the
   * value.
   *
   * @param input The `<input>` to expand.
   */
  function expandInput(input: HTMLInputElement) {
    input.style.width = "0";
    input.style.width = `${input.scrollWidth + 2}px`;
  }

  // Entering and exiting edit mode
  useEffect(() => {
    if (editing) {
      const input = inputRef.current;
      if (!input) return;
      expandInput(input);
      input.select();
    } else if (onEditExit) onEditExit();
  }, [editing]);

  // Edit mode
  if (editing)
    return (
      <input
        ref={inputRef}
        className="skc-input-chip__input"
        value={value}
        onChange={(event) => {
          if (onChange) onChange(event.target.value);
          const input = event.target;
          expandInput(input);
        }}
        onBlur={() => setEditing(false)}
        onKeyUp={(event) => {
          if (["Enter", "Escape"].indexOf(event.key) !== -1) setEditing(false);
        }}
      />
    );

  // Default mode
  return (
    <Interactive
      stateLayerEffect={Boolean(editable || onClick)}
      rippleEffect={Boolean(editable || onClick)}
      onClick={
        editable || onClick
          ? () => {
              onClick?.();
              if (editable) setEditing(true);
            }
          : undefined
      }
      href={href}
      element={element}
      style={style}
      className={cn(
        "skc-input-chip",
        selected && "skc-input-chip--selected",
        className,
      )}
    >
      {/* Avatar */}
      {avatar && (
        <div className="skc-input-chip__avatar">
          {selected ? <MaterialIcon icon="done" /> : avatar}
        </div>
      )}

      {/* Icon */}
      {icon && <div className="skc-input-chip__icon">{icon}</div>}

      {/* Label */}
      <span className="skc-input-chip__label">{children}</span>

      {/* Delete Button */}
      {onDelete && (
        <Button
          appearance="text"
          icon={<MaterialIcon icon="close" />}
          onClick={onDelete}
        />
      )}
    </Interactive>
  );
};

InputChip.displayName = "InputChip";

export default InputChip;

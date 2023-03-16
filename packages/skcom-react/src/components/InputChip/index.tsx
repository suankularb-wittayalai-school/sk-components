// External libraries
import { motion } from "framer-motion";
import * as React from "react";

// Internal components
import { Button } from "../Button";
import { MaterialIcon } from "../MaterialIcon";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/input-chip.css";

// Utilities
import { useRipple } from "../../utils/animation";
import { cn } from "../../utils/className";

/**
 * Props for {@link InputChip Input Chip}.
 */
export interface InputChipProps extends SKComponent {
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
   * - Material Guidelines and the
   *   {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?pli=1#heading=h.szjgl74eta6e guidelines on Chip Field}
   *   recommend selecting the Input Chip set to be deleted via backspace,
   *   requiring another backspace to confirm.
   * - Optional.
   */
  selected?: boolean;

  /**
   * An ID for transitioning to and from this Input Chip. See Framer Motion’s
   * documentation on LayoutGroup for more details.
   *
   * - Must be unique within the page.
   * - Optional.
   */
  layoutID?: any;

  /**
   * Triggers when the user click anywhere in the Input Chip except the delete button.
   *
   * - This is useful if there’s more information on the chip that can be
   *   displayed on click,
   *  {@link https://m3.material.io/components/chips/guidelines#4ebdaf13-08c1-4959-a481-1fc2be2fa1f2 as seen here}.
   * - Optional.
   */
  onClick?: () => any;

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
}

/**
 * A Chip displaying a piece of information entered by the user is an Input
 * Chip. This type of Chip can be added, edited, and deleted by the user.
 *
 * Like all Chips, an Input Chip appears alongside other Input Chips, but these
 * can also appear inside a text field like in Chip Field.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.qr7x5m70pqd SKCom documentation}
 *
 * @param children The text displayed inside the chip.
 * @param avatar An avatar is placed before all content in an Input Chip.
 * @param icon An icon can appear before all content in an Input Chip. In a page with many chips, icons can quickly orient users.
 * @param selected If the Input Chip is selected. `avatar` is replaced with a checkmark if this is `true`.
 * @param layoutID An ID for transitioning to and from this Input Chip.
 * @param onClick Triggers when the user click anywhere in the Input Chip except the delete button.
 * @param onDelete Triggers when the user click the delete button.
 * @param editable If the Input Chip can be edited, clicking on it revert it back to the original text, which can be edited normally.
 * @param value The value inside the field that appears after entering edit mode. This is useful if you want a controlled input.
 * @param onChange This function triggers when the user make changes to the field value.
 * @param onEditExit Triggers when the user exit edit mode.
 */
export function InputChip({
  children,
  avatar,
  icon,
  selected,
  layoutID,
  onClick,
  onDelete,
  editable,
  value,
  onChange,
  onEditExit,
  style,
  className,
}: InputChipProps) {
  // Ripple setup
  const chipRef: React.LegacyRef<HTMLButtonElement> = React.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(chipRef);

  // Editable Chip logic
  const inputRef: React.LegacyRef<HTMLInputElement> = React.useRef(null);
  const [editing, setEditing] = React.useState<boolean>(false);
  function expandInput(input: HTMLInputElement) {
    input.style.width = "0";
    input.style.width = `${input.scrollWidth + 2}px`;
  }
  React.useEffect(() => {
    if (editing) {
      const input = inputRef.current;
      if (!input) return;
      expandInput(input);
      input.select();
    } else if (onEditExit) onEditExit();
  }, [editing]);

  const divProps = {
    style,
    className: cn([
      "skc-input-chip",
      selected && "skc-input-chip--selected",
      className,
    ]),
  } satisfies JSX.IntrinsicElements["div"];
  const buttonProps = {
    ...divProps,
    ref: chipRef,
    onClick: () => {
      if (onClick) onClick();
      if (editable) setEditing(true);
    },
    ...rippleListeners,
  } satisfies JSX.IntrinsicElements["button"];

  const divContent = (
    <>
      {avatar && (
        <div className="skc-input-chip__avatar">
          {selected ? <MaterialIcon icon="done" /> : avatar}
        </div>
      )}
      {icon && <div className="skc-input-chip__icon">{icon}</div>}
      <span className="skc-input-chip__label">{children}</span>
      {onDelete && (
        <Button
          appearance="text"
          icon={<MaterialIcon icon="close" />}
          onClick={onDelete}
        />
      )}
    </>
  );
  const buttonContent = (
    <>
      {divContent}
      <motion.span
        initial={{ scale: 0, opacity: 0.36 }}
        animate={rippleControls}
        className="skc-input-chip__ripple"
        style={rippleStyle}
      />
    </>
  );

  return editing ? (
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
        if (["Enter", "Escape"].includes(event.key)) setEditing(false);
      }}
    />
  ) : editable || onClick ? (
    layoutID ? (
      <motion.button layoutId={layoutID} {...buttonProps}>
        {buttonContent}
      </motion.button>
    ) : (
      <button {...buttonProps}>{buttonContent}</button>
    )
  ) : layoutID ? (
    <motion.div layoutId={layoutID} {...divProps}>
      {divContent}
    </motion.div>
  ) : (
    <div {...divProps}>{divContent}</div>
  );
}

InputChip.displayName = "InputChip";

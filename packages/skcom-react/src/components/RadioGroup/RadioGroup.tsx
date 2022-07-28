// Modules
import { useEffect, useState } from "react";

// Helpers
import { classNames } from "../../utils/helpers/elements";

// Types
import { SKComponent } from "../../utils/types";

export interface RadioGroupProps extends SKComponent {
  name: string;
  options: { id: string; value: any; label: string }[];
  value?: any;
  defaultValue?: any;
  onChange: (newValue: any) => void;
}

/**
 * A list of radio buttons allows the user to select one option out of a list that is always visible
 * @param name Used for ID
 * @param options An array of checkbox options, each include `id`, `value`, `label`
 * @param value Use as a controlled input
 * @param defaultValue The value that already is in the `input` element
 * @param onChange Triggered when the input value changes
 */
const RadioGroup = ({
  name,
  options,
  value,
  defaultValue,
  onChange,
  className,
  style,
}: RadioGroupProps): JSX.Element => {
  const [selected, setSelected] = useState<any>(defaultValue || null);
  useEffect(() => onChange(selected), [selected]);

  return (
    <>
      {options.map((option) => (
        <div
          key={option.id}
          className={classNames(["radio", className])}
          style={style}
        >
          <input
            id={option.id}
            name={name}
            value={value || option.id}
            type="radio"
            onChange={(e) =>
              e.target.checked &&
              (value ? onChange(option.value) : setSelected(option.value))
            }
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </>
  );
};

export default RadioGroup;

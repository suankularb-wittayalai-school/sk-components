// Modules
import { useEffect, useState } from "react";

// Helpers
import { classNames } from "../../utils/helpers/elements";

// Types
import { RadioGroupProps } from "../RadioGroup/RadioGroup";

export interface ChecklistProps
  extends Omit<RadioGroupProps, "value" | "defaultValue" | "onChange"> {
  value?: any[];
  defaultValue?: any[];
  onChange: (newValue: any[]) => void;
}

/**
 * A list of checkboxes allows the user to select many options 
 * @param name Used for ID
 * @param options An array of checkbox options, each include `id`, `value`, `label`
 * @param value Use as a controlled input
 * @param defaultValue The value that already is in the `input` element
 * @param onChange Triggered when the input value changes
 */
const Checklist = ({
  name,
  options,
  value,
  defaultValue,
  onChange,
  className,
  style,
}: ChecklistProps): JSX.Element => {
  const [selected, setSelected] = useState<any[]>(defaultValue || []);
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
            value={option.id}
            type="checkbox"
            onChange={(e) =>
              e.target.checked
                ? // Add to selected
                  value
                  ? onChange([...value, option.value])
                  : setSelected([...selected, option.value])
                : // Remove from selected
                value
                ? onChange(value.filter((valueOpt) => option.value != valueOpt))
                : setSelected(
                    selected.filter(
                      (selectedOpt) => option.value != selectedOpt
                    )
                  )
            }
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </>
  );
};

export default Checklist;
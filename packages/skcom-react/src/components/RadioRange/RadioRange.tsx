// Modules
import { useEffect, useState } from "react";

// Helpers
import { range } from "../../utils/helpers/array";
import { classNames } from "../../utils/helpers/elements";

// Types
import { SKComponent } from "../../utils/types";

export interface RadioRangeProps extends SKComponent {
  name: string;
  steps?: number;
  minLabel: string | JSX.Element;
  maxLabel: string | JSX.Element;
  value?: any;
  defaultValue?: any;
  onChange: (newValue: any) => void;
}

/**
 * Let the user choose from a scale of adjacent numbers, an example would be rating a teacher from 1-5
 * @param name Used for ID
 * @param steps The number of radio buttons, default to 5
 * @param minLabel The label for the minimum (most left)
 * @param maxLabel The label for the maximum (most right)
 * @param value Use as a controlled input
 * @param defaultValue The value that already is in the `input` element
 * @param onChange Triggered when the input value changes
 */
const RadioRange = ({
  name,
  steps,
  minLabel,
  maxLabel,
  value,
  defaultValue,
  onChange,
  className,
  style,
}: RadioRangeProps): JSX.Element => {
  const [selected, setSelected] = useState<any>(defaultValue || null);
  useEffect(() => onChange(selected), [selected]);

  return (
    <div className={classNames(["radio-range", className])} style={style}>
      <label htmlFor={[name, 1].join("-")}>{minLabel}</label>
      <div className="radio-range__buttons">
        {range(steps || 5).map((step) => {
          const stepName = [name, step + 1].join("-");
          return (
            <input
              id={stepName}
              name={name}
              value={stepName}
              type="radio"
              onChange={() =>
                value ? onChange(step + 1) : setSelected(step + 1)
              }
            />
          );
        })}
      </div>
      <label htmlFor={[name, steps || 5].join("-")}>{maxLabel}</label>
    </div>
  );
};

export default RadioRange;

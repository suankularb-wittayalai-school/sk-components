// Modules
import { useEffect, useState } from "react";

// Helpers
import { classNames } from "../../utils/helpers/elements";

// Types
import { SKComponent } from "../../utils/types";

export interface RadioRangeProps extends SKComponent {
  name: string;
  steps?: number;
  value?: any;
  defaultValue?: any;
  onChange: (newValue: any) => void;
}

/**
 * TODO: Radio Range documentation
 * @param name Used for ID
 * @param steps The number of radio buttons
 * @param value Use as a controlled input
 * @param defaultValue The value that already is in the `input` element
 * @param onChange Triggered when the input value changes
 */
const RadioRange = ({
  name,
  steps,
  value,
  defaultValue,
  onChange,
  className,
  style,
}: RadioRangeProps): JSX.Element => {
  const [selected, setSelected] = useState<any>(defaultValue || null);
  useEffect(() => onChange(selected), [selected]);

  return <>{/* TODO: Radio Range */}</>;
};

export default RadioRange;

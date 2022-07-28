// Modules
import { useEffect, useState } from "react";

// Types
import { SKComponent } from "../../utils/types";

export interface RangeProps extends SKComponent {
  name: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange: (newValue: number) => void;
  attr?: React.InputHTMLAttributes<HTMLInputElement>;
}

const Range = ({
  name,
  min,
  max,
  step,
  value,
  defaultValue,
  onChange,
  attr,
  className,
  style,
}: RangeProps) => {
  const [number, setNumber] = useState<number>(defaultValue || 0);
  useEffect(() => onChange(number), [number]);

  return (
    <input
      name={name}
      type="range"
      min={min}
      max={max}
      step={step}
      onChange={(e) =>
        value
          ? onChange(Number(e.target.value))
          : setNumber(Number(e.target.value))
      }
      className={className}
      style={style}
      {...attr}
    />
  );
};

export default Range;

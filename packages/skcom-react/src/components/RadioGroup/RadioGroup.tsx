// Modules
import { classNames } from "../../utils/helpers/elements";

// Types
import { SKComponent } from "../../utils/types";

export interface RadioGroupProps extends SKComponent {
  name: string;
  options: { id: string; value: any; label: string }[];
  allowMany?: boolean;
}

const RadioGroup = ({
  name,
  options,
  allowMany,
  className,
  style,
}: RadioGroupProps): JSX.Element => (
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
          type={allowMany ? "checkbox" : "radio"}
        />
        <label htmlFor={option.id}>{option.label}</label>
      </div>
    ))}
  </>
);

export default RadioGroup;

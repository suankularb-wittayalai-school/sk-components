// Modules
import { ReactNode } from "react";
import { classNames } from "../../utils/helpers/elements";

// Types
import { SKComponent } from "../../utils/types";

export interface FormElementProps extends SKComponent {
  label: string;
  children: ReactNode;
}

const FormElement = ({
  label,
  children,
  className,
  style,
}: FormElementProps): JSX.Element => (
  <div className={classNames(["form-element", className])} style={style}>
    <div className="form-element__label">{label}</div>
    {children}
  </div>
);

export default FormElement;

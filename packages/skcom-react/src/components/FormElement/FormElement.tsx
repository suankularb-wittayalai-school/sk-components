// Modules
import { ReactNode } from "react";
import { classNames } from "../../utils/helpers/elements";

// Types
import { SKComponent } from "../../utils/types";

export interface FormElementProps extends SKComponent {
  label: string;
  helperMsg?: string;
  errorMsg?: string;
  children: ReactNode;
}

/**
 * A wrapper for miscellaneous inputs
 * @param label A short description of the input, shows above the input
 * @param helperMsg A message displayed below the input, usually guides or provides an example of what to enter in
 * @param useAutoMsg Tells the user what’s wrong with the input
 * @param children Checklist, Radio Group, and Range
 */
const FormElement = ({
  label,
  helperMsg,
  errorMsg,
  children,
  className,
  style,
}: FormElementProps): JSX.Element => (
  <div className={classNames(["form-element", className])} style={style}>
    <div className="form-element__label">{label}</div>
    {helperMsg && <div className="form-element__helper">{helperMsg}</div>}
    {errorMsg && <div className="form-element__error">{errorMsg}</div>}
    {children}
  </div>
);

export default FormElement;

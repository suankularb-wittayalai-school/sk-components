// Modules
import { ReactNode } from "react";

// Helpers
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
 * @param errorMsg Tells the user what’s wrong with the input
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
    {/* Label */}
    <div className="form-element__label">{label}</div>

    {/* Helper message */}
    {helperMsg && !errorMsg && (
      <div className="form-element__helper">{helperMsg}</div>
    )}

    {/* Error message */}
    {errorMsg && <div className="form-element__error">{errorMsg}</div>}

    {/* Input */}
    {children}
  </div>
);

export default FormElement;

// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/form-group.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link FormGroup Form Group}.
 */
export interface FormGroupProps extends SKComponent {
  /**
   * Form Items within this group, be it a set of options to choose from or
   * related settings in a preferences page.
   *
   * - Must only be Form Items.
   * - Always required.
   */
  children?: React.ReactNode;

  /**
   * The legend for the entire group.
   *
   * - Must be a string or JSX Element.
   * - Always required.
   */
  label: string | JSX.Element;

  /**
   * A description of the Form Group for screen readers, similar to `alt` on
   * `<img>`.
   *
   * - Optional.
   */

  alt?: string;

  /**
   * Attributes for the underlying `<legend>` element used as the field.
   *
   * - Optional.
   */
  legendAttr?: React.ComponentProps<"legend">;
}

/**
 * A group of related form items, like options in a radio group.
 *
 * @param children Form Items within this group, be it a set of options to choose from or related settings in a preferences page.
 * @param label The legend for the entire field.
 * @param alt A description of the Form Group for screen readers, similar to `alt` on `<img>`.
 * @param legendAttr Attributes for the underlying `<legend>` element used as the field.
 */
export function FormGroup({
  children,
  label,
  alt,
  legendAttr,
  element,
  style,
  className,
}: FormGroupProps) {
  return React.createElement(
    element || "fieldset",
    { "aria-label": alt, style, className: cn(["skc-form-group", className]) },

    // Label
    <legend className="skc-form-group__label" {...legendAttr}>
      {label}
    </legend>,

    // Input
    children
  );
}

FormGroup.displayName = "FormGroup";

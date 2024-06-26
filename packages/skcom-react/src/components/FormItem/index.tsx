// External libraries
import * as React from "react";

// Internal components
import { CheckboxProps } from "../Checkbox";
import { RadioProps } from "../Radio";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/form-item.css";

// Utilities
import { cn } from "../../utils/className";
import { kebabify } from "../../utils/format";

/**
 * Props for {@link FormItem Form Item}.
 */
export interface FormItemProps extends SKComponent {
  /**
   * The input.
   *
   * - Must be a Checkbox, Radio, or Switch.
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * The label for the input.
   *
   * - Must be a string or JSX Element.
   * - Always required.
   */
  label: string | JSX.Element;

  /**
   * A description of the Form Item for screen readers, similar to `alt` on
   * `<img>`.
   *
   * - Required if `label` is a JSX Element, as it is used to generate the ID
   *   crucial for accessibility.
   */

  alt?: string;

  /**
   * Attributes for the underlying `<label>` element used as the field.
   *
   * - Optional.
   */
  labelAttr?: React.ComponentProps<"label">;
}

/**
 * Props of components allowed to be the child of {@link FormItem Form Item}.
 */
type InputProps = CheckboxProps | RadioProps;

/**
 * A wrapper for form control components like Checkbox, Radio, and Switch with
 * a label.
 *
 * @param children The input.
 * @param label The label for the input.
 * @param alt A description of the Form Item for screen readers, similar to `alt` on `<img>`.
 * @param labelAttr Attributes for the underlying `<label>` element used as the field.
 */
export function FormItem({
  children,
  label,
  alt,
  labelAttr,
  element,
  style,
  className,
}: FormItemProps) {
  const formItemID = `form-item-${kebabify(
    (typeof label === "string" ? label : alt)!
  )}`;

  return React.createElement(
    element || "div",
    { "aria-label": alt, style, className: cn(["skc-form-item", className]) },

    // Input
    React.cloneElement(React.Children.only(children) as JSX.Element, {
      inputAttr: {
        id:
          // Attempt to use existing ID
          ((children as JSX.Element).props as InputProps).inputAttr?.id ||
          // Use label’s `htmlFor` if specified so label still points to the
          // right element (see #104)
          labelAttr?.htmlFor ||
          // Otherwise, use the default
          formItemID,
      },
    } satisfies InputProps),

    // Label
    <label htmlFor={formItemID} className="skc-form-item__label" {...labelAttr}>
      {label}
    </label>
  );
}

FormItem.displayName = "FormItem";

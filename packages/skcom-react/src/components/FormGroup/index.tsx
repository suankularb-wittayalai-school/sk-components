import "@suankularb-components/css/dist/css/components/form-group.css";
import { ComponentProps, ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";

/**
 * A group of related form items, like options in a radio group.
 *
 * @param children Form Items within this group, be it a set of options to choose from or related settings in a preferences page.
 * @param label The legend for the entire field.
 * @param alt A description of the Form Group for screen readers, similar to `alt` on `<img>`.
 * @param legendAttr Attributes for the underlying `<legend>` element used as the field.
 */
const FormGroup: StylableFC<{
  /**
   * Form Items within this group, be it a set of options to choose from or
   * related settings in a preferences page.
   *
   * - Must only be Form Items.
   * - Always required.
   */
  children: ReactNode;

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
  legendAttr?: ComponentProps<"legend">;
}> = ({
  children,
  label,
  alt,
  legendAttr,
  element: Element = "fieldset",
  style,
  className,
}) => (
  <Element
    aria-label={alt}
    style={style}
    className={cn(`skc-form-group`, className)}
  >
    {/* Label */}
    <legend className="skc-form-group__label" {...legendAttr}>
      {label}
    </legend>

    {/* Input */}
    {children}
  </Element>
);

FormGroup.displayName = "FormGroup";

export default FormGroup;

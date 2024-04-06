import "@suankularb-components/css/dist/css/components/form-item.css";
import { dash } from "radash";
import { Children, ComponentProps, ReactNode, cloneElement } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";
import Checkbox from "../Checkbox";
import Radio from "../Radio";

/**
 * Props of components allowed to be the child of {@link FormItem Form Item}.
 */
type InputProps = ComponentProps<typeof Checkbox | typeof Radio>;

/**
 * A wrapper for form control components like Checkbox, Radio, and Switch with
 * a label.
 *
 * @param children The input.
 * @param label The label for the input.
 * @param alt A description of the Form Item for screen readers, similar to `alt` on `<img>`.
 * @param labelAttr Attributes for the underlying `<label>` element used as the field.
 */
const FormItem: StylableFC<{
  /**
   * The input.
   *
   * - Must be a Checkbox, Radio, or Switch.
   * - Always required.
   */
  children: ReactNode;

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
  labelAttr?: ComponentProps<"label">;
}> = ({
  children,
  label,
  alt,
  labelAttr,
  element: Element = "div",
  style,
  className,
}) => {
  const formItemID = `form-item-${dash(
    (typeof label === "string" ? label : alt)!,
  )}`;

  return (
    <Element
      aria-label={alt}
      style={style}
      className={cn(`skc-form-item`, className)}
    >
      {/* Input */}
      {cloneElement(
        Children.only(children) as JSX.Element,
        {
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
        } as InputProps,
      )}

      {/* Label */}
      <label
        htmlFor={formItemID}
        className="skc-form-item__label"
        {...labelAttr}
      >
        {label}
      </label>
    </Element>
  );
};

FormItem.displayName = "FormItem";

export default FormItem;

import "@suankularb-components/css/dist/css/components/text.css";
import { ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";

/**
 * A piece of text with a typographic style applied.
 *
 * @param children The text to apply the typographic styling to.
 * @param type The token of the typescale to apply.
 */
const Text: StylableFC<{
  /**
   * The text to apply the typographic styling to.
   */
  children: ReactNode;

  /**
   * The typographic style to apply.
   */
  type:
    | "button"
    | "caption"
    | "overline"
    | `${"display" | "headline" | "title" | "label" | "body"}-${
        | "large"
        | "medium"
        | "small"}`;
}> = ({ type, children, element: Element = "span", className, style }) => (
  <Element
    className={cn(`skc-text skc-text--${type}`, className)}
    style={style}
  >
    {children}
  </Element>
);

Text.displayName = "Text";

export default Text;

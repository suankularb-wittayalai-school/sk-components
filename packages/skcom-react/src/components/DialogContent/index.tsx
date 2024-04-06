import "@suankularb-components/css/dist/css/components/dialog-content.css";
import { ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";

/**
 * Additional content that supplements the Dialog Header. This is where the
 * user can see more details about a decision or a space for the user to enter
 * information.
 *
 * @param children A Dialog Content can include anything. A common use case is List.
 * @param height The height of this component. If its content is taller than this value, Dialog Content scrolls.
 */
const DialogContent: StylableFC<{
  /**
   * A Dialog Content can include anything. A common use case is List.
   *
   * - Always required.
   */
  children: ReactNode;

  /**
   * The height of this component. If its content is taller than this value,
   * Dialog Content scrolls.
   *
   * - Setting a height will show Dividers on top of and below the component.
   * - Optional.
   */
  height?: number;
}> = ({ children, height, element: Element = "div", style, className }) => {
  return (
    <Element
      style={{ ...style, height }}
      className={cn(
        "skc-dialog-content",
        height !== undefined && "skc-dialog-content--scrollable",
        className,
      )}
    >
      {children}
    </Element>
  );
};

DialogContent.displayName = "DialogContent";

export default DialogContent;

import "@suankularb-components/css/dist/css/components/card-content.css";
import { ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";

/**
 * A section of content inside Card.
 *
 * @param children Card Content can contain anything, from supporting text to Actions.
 */
const CardContent: StylableFC<{
  /**
   * Card Content can contain anything, from supporting text to Actions.
   *
   * - Always required.
   */
  children: ReactNode;
}> = ({ children, element: Element = "div", style, className }) => (
  <Element style={style} className={cn(`skc-card-content`, className)}>
    {children}
  </Element>
);

CardContent.displayName = "CardContent";

export default CardContent;

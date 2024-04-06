import "@suankularb-components/css/dist/css/components/divider.css";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";

/**
 * A Divider separates items in a list with a thin line. This is used when
 * separation cannot be accomplished with Cards or white space.
 */
const Divider: StylableFC = ({ element: Element = "hr", style, className }) => (
  <Element style={style} className={cn("skc-divider", className)} />
);

Divider.displayName = "Divider";

export default Divider;

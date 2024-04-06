import "@suankularb-components/css/dist/css/components/tabs-container.css";
import { dash } from "radash";
import { Children, ComponentProps, ReactNode, cloneElement } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";
import Tab from "../Tab";

/**
 * A group of Tabs. Tabs allow the user to switch between pages on the same
 * level of a page hierarchy. For example, an Overview, Students, and Teachers
 * page of a class.
 *
 * @param children Tabs to select from.
 * @param appearance Where Tabs Container is placed affects its appearance. A Tabs Container responsible for the entire content pane (`primary`) has a different appearance as that for only a section (`secondary`).
 * @param alt A description of the Tabs Container for screen readers, similar to `alt` on `<img>`.
 */
const TabsContainer: StylableFC<{
  /**
   * Tabs to select from.
   */
  children: ReactNode;

  /**
   * Where Tabs Container is placed affects its appearance. A Tabs Container
   * responsible for the entire content pane (`primary`) has a different
   * appearance as that for only a section (`secondary`).
   *
   * - Must be `primary` or `secondary`.
   * - Always required.
   */
  appearance: "primary" | "secondary";

  /**
   * A description of the Tabs Container for screen readers, similar to `alt`
   * on `<img>`.
   *
   * - Always required.
   */
  alt: string;
}> = ({
  children,
  appearance,
  alt,
  element: Element = "div",
  style,
  className,
}) => {
  return (
    <Element
      style={style}
      className={cn(
        "skc-tabs-container",
        {
          primary: "skc-tabs-container--primary",
          secondary: "skc-tabs-container--secondary",
        }[appearance],
      )}
    >
      <div
        role="tablist"
        aria-label={alt}
        style={style}
        className={cn("skc-tabs-container__content", className)}
      >
        {Children.map(children, (child) =>
          cloneElement(child as JSX.Element, {
            containerID: `tabs-contaner-${dash(alt)}`,
          } satisfies ComponentProps<typeof Tab>),
        )}
      </div>
    </Element>
  );
};

TabsContainer.displayName = "TabsContainer";

export default TabsContainer;

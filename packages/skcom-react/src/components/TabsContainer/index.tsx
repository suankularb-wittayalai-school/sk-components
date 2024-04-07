// External libraries
import * as React from "react";

// Internal components
import { TabProps } from "../Tab";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/tabs-container.css";

// Utilities
import { cn } from "../../utils/className";
import { dash } from "radash";

/**
 * Props for {@link TabsContainer Tabs Container}.
 */
export interface TabsContainerProps extends SKComponent {
  /**
   * Tabs to select from.
   */
  children: React.ReactNode;

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
}

/**
 * A group of Tabs. Tabs allow the user to switch between pages on the same
 * level of a page hierarchy. For example, an Overview, Students, and Teachers
 * page of a class.
 *
 * @param children Tabs to select from.
 * @param appearance Where Tabs Container is placed affects its appearance. A Tabs Container responsible for the entire content pane (`primary`) has a different appearance as that for only a section (`secondary`).
 * @param alt A description of the Tabs Container for screen readers, similar to `alt` on `<img>`.
 */
export function TabsContainer({
  children,
  appearance,
  alt,
  element: Element = "div",
  style,
  className,
}: TabsContainerProps) {
  return (
    <Element
      style={style}
      className={cn([
        "skc-tabs-container",
        appearance === "primary"
          ? "skc-tabs-container--primary"
          : appearance === "secondary" && "skc-tabs-container--secondary",
      ])}
    >
      <div
        role="tablist"
        aria-label={alt}
        style={style}
        className={cn(["skc-tabs-container__content", className])}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child as JSX.Element, {
            containerID: `tabs-contaner-${dash(alt)}`,
          } satisfies TabProps),
        )}
      </div>
    </Element>
  );
}

TabsContainer.displayName = "TabsContainer";

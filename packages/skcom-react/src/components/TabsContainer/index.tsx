// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/tabs-container.css";

// Utilities
import { cn } from "../../utils/className";
import { TabProps } from "../Tab";
import { kebabify } from "../../utils/format";

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
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.pfftt8s0sg20 SKCom documentation}
 *
 * @param children Tabs to select from.
 * @param type Where Tabs Container is placed affects its appearance. A Tabs Container responsible for the entire content pane (`primary`) has a different appearance as that for only a section (`secondary`).
 * @param alt A description of the Tabs Container for screen readers, similar to `alt` on `<img>`.
 */
export function TabsContainer({
  children,
  appearance,
  alt,
  style,
  className,
}: TabsContainerProps) {
  const injectedChildren = React.Children.map(children, (child) =>
    React.cloneElement(child as JSX.Element, {
      containerID: `tabs-contaner-${kebabify(alt)}`,
    } satisfies TabProps)
  );

  return (
    <div
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
        {injectedChildren}
      </div>
    </div>
  );
}

TabsContainer.displayName = "TabsContainer";

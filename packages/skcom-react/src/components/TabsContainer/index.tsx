// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/tab.css";

// Utilities
import { cn } from "../../utils/className";

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
 */
export function TabsContainer({
  children,
  appearance,
  style,
  className,
}: TabsContainerProps) {
  return (
    <div
      style={style}
      className={cn([
        "skc-tab",
        appearance === "primary"
          ? "skc-button--primary"
          : appearance === "secondary" && "skc-button--secondary",
        className,
      ])}
    >
      {children}
    </div>
  );
}

TabsContainer.displayName = "TabsContainer";

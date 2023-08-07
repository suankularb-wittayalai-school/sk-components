// External libraries
import * as React from "react";
import { dash } from "radash";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/app-drawer-segment.css";

// Utilities
import { cn } from "../../utils/className";

export interface AppDrawerSegmentProps extends SKComponent {
  /**
   * The apps in this segment.
   */
  children: React.ReactNode;

  /**
   * The title of the group.
   */
  title: string;
}

/**
 * A group of apps in the App Drawer.
 * 
 * @param children The apps in this segment.
 * @param title The title of the group.
 */
export function AppDrawerSegment({
  children,
  title,
  style,
  className,
}: AppDrawerSegmentProps) {
  return (
    <section
      aria-labelledby={`drawer-${dash(title)}`}
      style={style}
      className={cn([`skc-app-drawer-segment`, className])}
    >
      <h3
        id={`drawer-${dash(title)}`}
        className="skc-app-drawer-segment__title"
      >
        {title}
      </h3>
      <ul className="skc-app-drawer-segment__content">{children}</ul>
    </section>
  );
}

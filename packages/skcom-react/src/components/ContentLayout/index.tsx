// External libraries
import { motion, useAnimationControls } from "framer-motion";
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/content-layout.css";

// Utilities
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";

/**
 * Props for {@link ContentLayout Content Layout}.
 */
export interface ContentLayoutProps extends SKComponent {
  /**
   * The main content of a page is grouped into Sections inside of a Content
   * Layout.
   *
   * - Must only have Sections.
   * - Always required.
   */
  children: React.ReactNode;
}

/**
 * A simple width-clamped vertical flow of content with minimal default styling.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.gxd7ps11kchv SKCom documentation}
 *
 * @param children The main content of a page is grouped into Sections inside of a Content Layout.
 */
export function ContentLayout({
  children,
  style,
  className,
}: ContentLayoutProps) {
  const { duration, easing } = useAnimationConfig();

  const baseTransition = transition(duration.medium2, easing.standard);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { ...baseTransition, delay: 0.15 } }}
      transition={baseTransition}
      style={style}
      className={cn(["skc-content-layout", className])}
    >
      <div className="skc-content-layout__content">{children}</div>
    </motion.main>
  );
}

ContentLayout.displayName = "ContentLayout";

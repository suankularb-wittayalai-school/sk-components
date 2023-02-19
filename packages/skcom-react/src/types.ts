// External libraries
import React from "react";

/**
 * Global attributes for all SK Components.
 */
export interface SKComponent {
  /**
   * `className` on the most relevant underlying attribute.
   */
  className?: string;

  /**
   * `style` on the most relevant underlying attribute.
   */
  style?: React.CSSProperties;
}

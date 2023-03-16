// External libraries
import * as React from "react";

// Styles
import "@suankularb-components/css/dist/css/abstracts/abstracts.css";

/**
 * Props for {@link ThemeProvider}.
 */
export interface ThemeProviderProps {
  /**
   * Content that uses this theme.
   */
  children: React.ReactNode;
}

/**
 * Provides default variables for SK Components.
 *
 * @param children Content that uses this theme.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  return <>{children}</>;
}

ThemeProvider.displayName = "ThemeProvider";

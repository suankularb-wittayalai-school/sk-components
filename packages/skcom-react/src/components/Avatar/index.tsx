// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/avatar.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link Avatar}.
 */
export interface AvatarProps extends SKComponent {
  /**
   * A user’s initials or their profile image.
   * 
   * - The value has 3 meanings:
   *   - If the value is a string, it is displayed as the user’s initials. The
   *     string should be no more that 2 characters long.
   *   - If the value is a JSX Element, it is displayed as the user’s profile
   *     picture. Note that the picture is cropped to a circle.
   *   - If not defined, a placeholder avatar is displayed.
   * - Optional.
   */
  children: React.ReactNode;
}

/**
 * An avatar represents the user, whether by their initials or their picture.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.3ypdzg62wg53 SKCom documentation}
 *
 * @param children A user’s initials or their profile image.
 */
export function Avatar({ children, style, className }: AvatarProps) {
  return (
    <div style={style} className={cn(["skc-avatar", className])}>
      {children}
    </div>
  );
}

Avatar.displayName = "Avatar";

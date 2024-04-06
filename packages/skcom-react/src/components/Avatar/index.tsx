import "@suankularb-components/css/dist/css/components/avatar.css";
import { cn } from "../../utils/className";
import { StylableFC } from "../../types";
import { ReactNode } from "react";

/**
 * An avatar represents the user, whether by their initials or their picture.
 *
 * @param children A user’s initials or their profile image.
 */
const Avatar: StylableFC<{
  /**
   * A user’s initials or their profile image.
   *
   * - Depending on the value, the avatar is displayed differently:
   *   - If the value is a string, it is displayed as the user’s initials. The
   *     string should be no more that 2 characters long.
   *   - If the value is a JSX Element, it is displayed as the user’s profile
   *     picture. Note that the picture is cropped to a circle.
   *   - If not defined, a placeholder avatar is displayed.
   * - Optional.
   */
  children?: ReactNode;
}> = ({ children, element: Element = "div", style, className }) => (
  <Element style={style} className={cn(`skc-avatar`, className)}>
    {typeof children === "string" ? (
      // Initials
      <span className="skc-avatar__initials">{children}</span>
    ) : children ? (
      // Image
      children
    ) : (
      // Placeholder
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.0002 16C26.0002 19.3137 23.314 22 20.0002 22C16.6865 22
          14.0002 19.3137 14.0002 16C14.0002 12.6863 16.6865 10 20.0002 10C23.314 10 26.0002 12.6863 26.0002 16ZM24.0002 16C24.0002 18.2091 22.2094 20 20.0002 20C17.7911 20 16.0002 18.2091 16.0002 16C16.0002 13.7909 17.7911 12 20.0002 12C22.2094 12 24.0002 13.7909 24.0002 16Z"
          fill="currentColor"
        />
        <path
          d="M20.0002 25C13.5259 25 8.00952 28.8284 5.9082 34.192C6.4201 34.7004 6.95934 35.1812 7.52353 35.6321C9.08827 30.7077 13.997 27 20.0002 27C26.0035 27 30.9122 30.7077 32.477 35.6321C33.0412 35.1812 33.5804 34.7004 34.0923 34.1921C31.991 28.8284 26.4746 25 20.0002 25Z"
          fill="currentColor"
        />
      </svg>
    )}
  </Element>
);

Avatar.displayName = "Avatar";

export default Avatar;

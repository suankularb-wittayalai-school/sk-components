// External libraries
import * as React from "react";

// Internal components
import { Button, ButtonProps } from "../Button";
import { MaterialIcon } from "../MaterialIcon";
import { Text } from "../Text";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/page-header.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link PageHeader Page Header}.
 */
export interface PageHeaderProps extends SKComponent {
  /**
   * The title text: the biggest text on a page and the only within a `<h1>`
   * tag.
   *
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * @deprecated Use `children` instead.
   */
  title?: string | JSX.Element;

  /**
   * @deprecated
   */
  icon?: JSX.Element;

  /**
   * @deprecated
   */
  alt?: string;

  /**
   * @deprecated
   */
  brand?: JSX.Element;

  /**
   * The link the back Button navigates to.
   *
   * - Important: the Back button is not for going back, but for going up a
   *   hierarchy in the sitemap. As a page can sometimes be navigated to from
   *   many places, this ensures that the Back button of a page always goes to
   *   the same place.
   *   {@link https://m2.material.io/design/navigation/understanding-navigation.html Learn more about navigation.}
   * - Required if `onBack` is not defined, as the back Button cannot have no
   *   functionality.
   * - Incompatible with `onBack`.
   */
  parentURL?: string;

  /**
   * @deprecated
   */
  homeURL?: string;

  /**
   * An App Drawer placed on the right edge of the Page Header.
   *
   * - Recommended if this app is part of a family of apps.
   * - Optional.
   */
  appDrawer?: JSX.Element;

  /**
   * Allows for translation of the accessibility labels.
   *
   * - Must be `th` or `en-US`, as SKCom currently only support those 2
   *   languages.
   * - Optional.
   */
  locale?: "en-US" | "th";

  /**
   * Change the underlying element from `<a>` to a custom element. This is
   * useful when a framework you’re using has a Link component for routing. An
   * example is `next/link` from Next.js.
   *
   * - Optional.
   * - Incompatible with `onBack`.
   */
  buttonElement?: ButtonProps["element"];

  /**
   * The function triggered when the back Button is clicked.
   *
   * - Required if `parentURL` is not defined, as the back Button cannot have
   *   no functionality.
   * - Incompatible with `parentURL`.
   */
  onBack?: () => any;

  /**
   * The function called when the user clicks on the navigation Button.
   *
   * - Always required.
   */
  onNavToggle: () => any;

  /**
   * @deprecated
   */
  backAttr?: ButtonProps;

  /**
   * This prop is not supported by this component.
   */
  element?: never;
}

/**
 * There’s exactly one Page Header on every page. It displays the title (in
 * the only `<h1>` on the page), the back Button for navigating up, and
 * the App Drawer.
 *
 * @see {@link https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing#heading=h.5w06ou3fwzsd SKCom documentation}
 *
 * @param children The title text: the biggest text on a page and the only within a `<h1>` tag.
 * @param parentURL The link the back Button navigates to.
 * @param locale Allows for translation of the accessibility labels.
 * @param buttonElement Change the underlying element from `<a>` to a custom element.
 * @param onBack The function triggered when the back Button is clicked.
 * @param onNavToggle The function called when the user clicks on the navigation Button.
 */
export function PageHeader({
  children,
  parentURL,
  appDrawer,
  locale,
  buttonElement,
  onBack,
  onNavToggle,
  style,
  className,
}: PageHeaderProps) {
  // Page Header minimizes on scroll, this section does the calculation
  const headerRef: React.RefObject<HTMLElement> = React.useRef(null);
  const [minimized, setMinimized] = React.useState<boolean>(false);

  /**
   * Check if the minimized Page Header should be shown based on scroll
   * distance from top.
   *
   * @returns If the minimized Page Header should be shown.
   */
  function isMinimized(scrollY: number, clientHeight: number) {
    // Height of desktop Page Header: 192px
    // Height of minimized Page Header: 64px
    return scrollY > clientHeight - 64 || scrollY > 192;
  }

  React.useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // Minimize on load if page already scrolled
    setMinimized(isMinimized(window.scrollY, header.clientHeight));

    // Decide whether to minimize depending on the scroll position when the
    // user scrolls
    const handleScroll = () =>
      setMinimized(isMinimized(window.scrollY, header.clientHeight));
    document.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <BackgroundBlobs />
      <header style={style} className={cn([`skc-page-header`, className])}>
        <div className="skc-page-header__content">
          {parentURL || onBack ? (
            // Back Button
            <Button
              appearance="text"
              icon={<MaterialIcon icon="arrow_backward" />}
              alt={locale === "th" ? "กลับ" : "Navigate up"}
              onClick={onBack}
              href={parentURL}
              element={buttonElement}
            />
          ) : (
            // Navigation Toggle
            <Button
              appearance="text"
              icon={<MaterialIcon icon="menu" />}
              alt={locale === "th" ? "เปิดเมนู" : "Open navigation"}
              onClick={onNavToggle}
              className="skc-page-header__nav-toggle"
            />
          )}

          {/* Header text */}
          <Text
            type="headline-large"
            element="h1"
            className="skc-page-header__text"
          >
            {children}
          </Text>

          {/* App Drawer */}
          {appDrawer}
        </div>
      </header>
    </>
  );
}

/**
 * Blurred blobs behind the Page Header. Contains both the mobile version and
 * the desktop version, with only the appropriate one being shown at a time.
 */
const BackgroundBlobs: React.FC = () =>
  // prettier-ignore
  <>
    {/* Desktop version */}
    <svg
      viewBox="0 0 1194 263"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="skc-page-header__blobs skc-page-header__blobs--desktop"
    >
      <g filter="url(#filter)">
        <path d="M336.5 -76.75C336.5 -13.7895 113.011 103.75 50.0502 103.75C-12.9103 103.75 -91 -25.7895 -91 -88.75C-91 -151.71 121.54 -326 184.5 -326C247.46 -326 336.5 -139.71 336.5 -76.75Z" className="skc-page-header__blob-secondary"/>
        <path d="M1154 -90.75C1154 -27.7895 930.511 89.75 867.55 89.75C804.59 89.75 634 -27.7895 634 -90.75C634 -153.71 939.04 -340 1002 -340C1064.96 -340 1154 -153.71 1154 -90.75Z" className="skc-page-header__blob-secondary"/>
        <path d="M1182.6 140.656C1245.56 140.656 1315.1 141.906 1286.1 7.65555C1257.1 -126.594 982.102 -84.5944 917.101 7.65555C852.101 99.9055 1119.64 140.656 1182.6 140.656Z" className="skc-page-header__blob-primary"/>
        <path d="M655.25 -16C655.25 46.9605 307.71 70.25 244.75 70.25C181.79 70.25 123 -39.5395 123 -102.5C123 -165.46 238.04 -174 301 -174C363.96 -174 655.25 -78.9605 655.25 -16Z" className="skc-page-header__blob-primary"/>
      </g>
      <defs>
        <filter id="filter" x="-191" y="-440" width="1584" height="680" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="50" result="blur" />
        </filter>
      </defs>
    </svg>

    {/* Mobile version */}
    <svg
      viewBox="0 0 393 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="skc-page-header__blobs skc-page-header__blobs--mobile"
    >
      <g filter="url(#filter)">
        <path d="M92.215 73.9492C92.215 97.6861 18.9131 142 -1.73719 142C-22.3875 142 -48 93.1619 -48 69.425C-48 45.6881 21.7105 -20.0212 42.3608 -20.0212C63.0111 -20.0212 92.215 50.2123 92.215 73.9492Z" className="skc-page-header__blob-secondary"/>
        <path d="M390.554 5.97042C390.554 29.7073 317.252 74.0212 296.602 74.0212C275.951 74.0212 220 29.7073 220 5.97042C220 -17.7665 320.049 -88 340.7 -88C361.35 -88 390.554 -17.7665 390.554 5.97042Z" className="skc-page-header__blob-secondary"/>
        <path d="M395.394 90.436C416.044 90.436 438.853 90.9072 429.341 40.2933C419.829 -10.3207 329.632 5.51383 308.313 40.2933C286.994 75.0727 374.744 90.436 395.394 90.436Z" className="skc-page-header__blob-primary"/>
        <path d="M219.572 28.0521C219.572 51.789 105.583 60.5695 84.9326 60.5695C64.2823 60.5695 45 19.1774 45 -4.55946C45 -28.2964 82.7316 -31.5159 103.382 -31.5159C124.032 -31.5159 219.572 4.31524 219.572 28.0521Z" className="skc-page-header__blob-primary"/>
      </g>
      <defs>
        <filter id="filter" x="-148" y="-188" width="680" height="430" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="50" result="blur" />
        </filter>
      </defs>
    </svg>
  </>;

PageHeader.displayName = "PageHeader";

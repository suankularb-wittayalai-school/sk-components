// External libraries
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useAnimationControls,
} from "framer-motion";
import * as React from "react";

// Internal components
import { Button, ButtonProps } from "../Button";
import { MaterialIcon } from "../MaterialIcon";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/page-header.css";

// Utilities
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";
import { kebabify } from "../../utils/format";

/**
 * Props for {@link PageHeader Page Header}.
 */
export interface PageHeaderProps extends SKComponent {
  /**
   * Some additional components inside the Page Header area.
   *
   * - Ensure that these components are highly related to the title itself.
   * - Examples are:
   *   - A Search field in a lookup page (Search is highly related to “School
   *     lookup”).
   *   - A TL;DR section and tags in a news article (a summary of an article
   *     is highly related to the headline).
   *   - etc.
   * - Optional.
   */
  children?: React.ReactNode;

  /**
   * The title text: the biggest text in a page and the only within a `<h1>`
   * tag.
   *
   * - Always required.
   */
  title: string | JSX.Element;

  /**
   * An icon representative of this page of the application.
   *
   * - Incompatible with `children`.
   */
  icon?: JSX.Element;

  /**
   * A small image of your brand can be put on the Page Header to constantly
   * remind your users that they are, in fact, in your app.
   *
   * - Replaces the home Button icon.
   * - Not displayed on desktop.
   * - Ensure the image is simple and undistracting.
   * - Optional but recommended.
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
   * The link to the home page of this application.
   *
   * - Optional.
   */
  homeURL?: string;

  /**
   * Change the underlying element from `<a>` to a custom element. This is
   * useful when a framework you’re using has a Link component for routing. An
   * example is `next/link` from Next.js.
   *
   * - Optional.
   * - Incompatible with `onBack`.
   */
  element?: ButtonProps["element"];

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
   * Props for the underlying Button component the back Button uses.
   *
   * - Optional.
   */
  backAttr?: ButtonProps;
}

/**
 * There’s exactly one Page Header on every page. It displays the title (in
 * the only `<h1>` in the page), the back Button for navigating up, and
 * additional components very closely related to the title.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.5w06ou3fwzsd SKCom documentation}
 *
 * @param children Some additional components inside the Page Header area.
 * @param title The title text: the biggest text in a page and the only within a `<h1>` tag.
 * @param icon The icon representative of this page.
 * @param brand A small image of your brand can be put on the Page Header.
 * @param parentURL The link the back Button navigates to.
 * @param homeURL The link to the home page of this application.
 * @param element Change the underlying element from `<a>` to a custom element.
 * @param onBack The function triggered when the back Button is clicked.
 * @param onNavToggle The function called when the user clicks on the navigation Button.
 * @param backAttr Props for the underlying Button component the back Button uses.
 */
export function PageHeader({
  children,
  title,
  icon,
  brand,
  parentURL,
  homeURL,
  element,
  onBack,
  onNavToggle,
  backAttr,
  style,
  className,
}: PageHeaderProps) {
  // Page Header minimizes on scroll, this section does the calculation
  const headerRef: React.LegacyRef<HTMLElement> = React.useRef(null);
  const [minimized, setMinimized] = React.useState<boolean>(false);

  React.useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // Set scroll distance from top until minimize
    // (The height of the minimized Page Header is 64px)
    const scrollMargin = header.clientHeight - 64;

    // Minimize on load if page already scrolled
    setMinimized(window.scrollY > scrollMargin);

    // Decide whether to minimize depending on the scroll position when the
    // user scrolls
    const handleScroll = () => setMinimized(window.scrollY > scrollMargin);
    document.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { duration, easing } = useAnimationConfig();
  const minimizeTransition = transition(duration.short4, easing.standard);

  // Animate header text on page change
  const headerTextControls = useAnimationControls();
  React.useEffect(() => {
    headerTextControls.set({ opacity: 0, scale: 0.8, y: 10 });
    headerTextControls.start({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: transition(duration.medium2, easing.standard),
    });
  }, [title]);

  // Animate icon on page change
  const iconControls = useAnimationControls();
  React.useEffect(() => {
    if (!icon) return;

    iconControls.set({ opacity: 0, scale: 1.2, translateY: "-50%" });
    iconControls.start({
      opacity: 0.08,
      scale: 1,
      transition: transition(duration.long4, easing.standard),
    });
  }, [icon]);

  const headerTextProps = {
    layoutId: "page-header-text",
    animate: headerTextControls,
    transition: minimizeTransition,
  };

  return (
    <>
      <div className="skc-page-header__replacement-color" />
      <div
        style={{ height: minimized ? headerRef.current?.clientHeight : 0 }}
      />
      <LayoutGroup>
        <motion.header
          ref={headerRef}
          layoutId="page-header"
          transition={minimizeTransition}
          style={style}
          className={cn([
            "skc-page-header",
            minimized && "skc-page-header--minimized",
            className,
          ])}
        >
          <div className="skc-page-header__content">
            {/* Background icon */}
            {icon && !children && (
              <motion.div
                animate={iconControls}
                className="skc-page-header__icon"
              >
                {icon}
              </motion.div>
            )}
            <motion.div
              layoutId="page-header-actions"
              transition={minimizeTransition}
              className="skc-page-header__actions"
            >
              {/* Back Button */}
              <Button
                appearance="text"
                icon={<MaterialIcon icon="arrow_backward" />}
                onClick={onBack}
                href={parentURL}
                element={element}
              />
              {minimized && (
                // Header (when minimized)
                <motion.h1 {...headerTextProps}>{title}</motion.h1>
              )}
              <div className="skc-page-header__trailing">
                {homeURL && (
                  // Home Button
                  <Button
                    appearance="text"
                    icon={brand || <MaterialIcon icon="home" />}
                    href={homeURL}
                    element={element}
                    {...backAttr}
                  />
                )}
                {/* Menu toggle */}
                <Button
                  appearance="text"
                  icon={<MaterialIcon icon="menu" />}
                  onClick={onNavToggle}
                />
              </div>
            </motion.div>
            {!minimized && (
              // Header (initial)
              <motion.h1 {...headerTextProps}>{title}</motion.h1>
            )}
            {/* Related content */}
            {children && (
              <motion.div
                animate={headerTextControls}
                className="skc-page-header__related"
              >
                {children}
              </motion.div>
            )}
          </div>
        </motion.header>
      </LayoutGroup>
    </>
  );
}

PageHeader.displayName = "PageHeader";

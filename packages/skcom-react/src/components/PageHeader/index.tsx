// External libraries
import * as React from "react";

// Internal components
import { ButtonProps } from "../Button";
import { Text } from "../Text";
import BackgroundBlobs from "./BackgroundBlobs";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/page-header.css";

// Utilities
import { AnimatePresence, motion } from "framer-motion";
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";
import FixedBackgroundBlobs from "./FixedBackgroundBlobs";
import PageHeaderAction from "./PageHeaderAction";

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
}

/**
 * There’s exactly one Page Header on every page. It displays the title (in
 * the only `<h1>` on the page), the back Button for navigating up, and
 * the App Drawer.
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
  element: Element = "header",
  style,
  className,
}: PageHeaderProps) {
  const { duration, easing } = useAnimationConfig();

  // Page Header minimizes on scroll, this section does the calculation
  const headerRef: React.RefObject<HTMLElement> = React.useRef(null);
  const [minimized, setMinimized] = React.useState(false);

  React.useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // Minimize on load if page already scrolled
    setMinimized(scrollY > header.clientHeight);

    // Decide whether to minimize depending on the scroll position when the
    // user scrolls
    const handleScroll = () => setMinimized(scrollY > header.clientHeight);
    document.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <BackgroundBlobs />

      {/* Minimized */}
      <AnimatePresence>
        {minimized && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: -100,
              transition: transition(
                duration.short4,
                easing.standardAccelerate,
              ),
            }}
            transition={transition(duration.medium2, easing.standardDecelerate)}
            className="skc-page-header__minimized"
          >
            <FixedBackgroundBlobs />
            <PageHeaderAction
              parentURL={parentURL}
              locale={locale}
              buttonElement={buttonElement}
              onBack={onBack}
              onNavToggle={onNavToggle}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Element
        ref={headerRef}
        style={style}
        className={cn([`skc-page-header`, className])}
      >
        <div className="skc-page-header__content">
          {/* Action */}
          <PageHeaderAction
            parentURL={parentURL}
            locale={locale}
            buttonElement={buttonElement}
            onBack={onBack}
            onNavToggle={onNavToggle}
          />

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
      </Element>
    </>
  );
}

PageHeader.displayName = "PageHeader";

// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/page-header.css";

// Utilities
import { cn } from "../../utils/className";
import { Button, ButtonProps } from "../Button";
import { MaterialIcon } from "../MaterialIcon";

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
   * @todo
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
  return (
    <header style={style} className={cn(["skc-page-header", className])}>
      <div className="skc-page-header__content">
        <div className="skc-page-header__actions">
          <Button
            appearance="text"
            icon={<MaterialIcon icon="arrow_backward" />}
            onClick={onBack}
            href={parentURL}
            element={element}
          />
          <div className="skc-page-header__trailing">
            {homeURL && (
              <Button
                appearance="text"
                icon={brand || <MaterialIcon icon="home" />}
                href={homeURL}
                element={element}
                {...backAttr}
              />
            )}
            <Button
              appearance="text"
              icon={<MaterialIcon icon="menu" />}
              onClick={onNavToggle}
            />
          </div>
        </div>
        <h1>{title}</h1>
        {children}
      </div>
    </header>
  );
}

PageHeader.displayName = "PageHeader";

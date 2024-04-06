import "@suankularb-components/css/dist/css/components/nav-bar.css";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { LangCode, StylableFC } from "../../types";
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";
import Button from "../Button";
import MaterialIcon from "../MaterialIcon";

/**
 * A Navigation Bar contains Navigation Bar Items, each leading to a different
 * top-level page. These pages should only be navigated to from the Navigation
 * Bar and the Navigation Drawer.
 *
 * On larger screens, it appears as a Navigation Rail.
 *
 * @param children A Navigation Bar contains Navigation Bar Items, each leading to a different top-level page.
 * @param brand A small image of your brand can be put on the Navigation Rail.
 * @param fab If a page includes a FAB, it is moved to the Navigation Rail in larger screens.
 * @param end More Navigation Items can be placed on the bottom of the Navigation Rail in larger screens.
 * @param onNavToggle The function called when the user clicks on the navigation Button.
 * @param locale Allows for translation of the accessibility labels.
 */
const NavBar: StylableFC<{
  /**
   * A Navigation Bar contains Navigation Bar Items, each leading to a different
   * top-level page. These pages should only be navigated to from the Navigation
   * Bar and the Navigation Drawer.
   *
   * - Must include at least 3 Navigation Bar Items.
   * - Must not include more than 5 Navigation Bar Items visible on mobile.
   * - Always required.
   */
  children: ReactNode;

  /**
   * A small image of your brand can be put on the Navigation Rail to constantly
   * remind your users that they are, in fact, in your app.
   *
   * - Not displayed on mobile.
   * - Ensure the image is simple and undistracting.
   * - Optional but recommended.
   */
  brand?: JSX.Element;

  /**
   * If a page includes a FAB, it is moved to the Navigation Rail in larger
   * screens to assert its dominance.
   *
   * - Optional.
   */
  fab?: JSX.Element;

  /**
   * More Navigation Items can be placed on the bottom of the Navigation Rail
   * in larger screens. Use cases are settings and log out.
   *
   * - Optional.
   */
  end?: JSX.Element;

  /**
   * The function called when the user clicks on the navigation Button.
   *
   * - Always required.
   */
  onNavToggle: () => any;

  /**
   * Allows for translation of the accessibility labels.
   *
   * - Must be `th` or `en-US`, as SKCom currently only support those 2 languages.
   * - Optional.
   */
  locale?: LangCode;
}> = ({
  children,
  brand,
  fab,
  end,
  onNavToggle,
  locale = "en-US",
  element: Element = "nav",
  style,
  className,
}) => {
  const { duration, easing } = useAnimationConfig();

  return (
    <Element style={style} className={cn("skc-nav-bar", className)}>
      {children}
      <motion.div layout layoutRoot className="skc-nav-bar__main">
        <section className="skc-nav-bar__toggle-and-fab">
          <Button
            appearance="text"
            icon={<MaterialIcon icon="menu" />}
            alt={locale === "th" ? "เปิดเมนู" : "Toggle Navigation Drawer"}
            onClick={onNavToggle}
          />
          <div className="skc-nav-bar__brand">{brand}</div>
          {fab}
        </section>
        <motion.section
          layout="position"
          transition={transition(duration.medium2, easing.standard)}
          className="skc-nav-bar__destinations"
        >
          {children}
        </motion.section>
      </motion.div>
      ,<section className="skc-nav-bar__end">{end}</section>
    </Element>
  );
};

NavBar.displayName = "NavBar";

export default NavBar;

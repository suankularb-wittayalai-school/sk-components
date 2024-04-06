import "@suankularb-components/css/dist/css/components/tab.css";
import { motion } from "framer-motion";
import { dash } from "radash";
import { StylableFC } from "../../types";
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";
import Interactive from "../Interactive";

/**
 * Tabs allow the user to switch between pages on the same level of a page
 * hierarchy. For example, an Overview, Students, and Teachers page of a class.
 *
 * @param icon An icon appears before or above the label. Icons help users identify pages more quickly.
 * @param label An additional text label next to or underneath the icon.
 * @param alt A description of the Tab for screen readers, similar to `alt` on `<img>`.
 * @param tooltip A message shown in a tooltip when the user hovers over the Tab.
 * @param selected Highlights the Tab. If the user is currently on this page, the Tab should be highlighted.
 * @param onClick The function called when the user interacts with the Tab, similar to `onClick` on `<button>`.
 * @param href The URL of the page this Tab leads to, similar to `href` on `<a>`.
 */
const Tab: StylableFC<{
  /**
   * An icon appears before or above the label. Icons help users identify pages more quickly.
   *
   * - If the icon is sufficiently representative of the page, a label isn’t
   *   needed.
   * - Normally optional but required if `label` is not defined as a Tab cannot
   *   be empty.
   */
  icon?: JSX.Element;

  /**
   * An additional text label next to or underneath the icon.
   *
   * - Required if `icon` is not defined as a Tab cannot be empty.
   */
  label?: string | JSX.Element;

  /**
   * A description of the Tab for screen readers, similar to `alt` on `<img>`.
   *
   * - Required if the Tab just includes `icon`, because an icon has no
   *   significance for screen readers.
   */
  alt?: string;

  /**
   * @private
   */
  containerID?: string;

  /**
   * A message shown in a tooltip when the user hovers over the Tab.
   *
   * - Optional.
   */
  tooltip?: string;

  /**
   * Highlights the Tab. If the user is currently on this page, the Tab should
   * be highlighted.
   *
   * - Optional.
   */
  selected?: boolean;

  /**
   * The function called when the user interacts with the Tab, similar to
   * `onClick` on `<button>`.
   */
  onClick?: () => any;

  /**
   * The URL of the page this Tab leads to, similar to `href` on `<a>`.
   */
  href?: string;
}> = ({
  icon,
  label,
  alt,
  containerID,
  tooltip,
  selected,
  onClick,
  href,
  element,
  style,
  className,
}) => {
  const { duration, easing } = useAnimationConfig();

  const tabID = `tab-${dash((typeof label === "string" ? label : alt)!)}`;

  return (
    <Interactive
      href={href}
      onClick={onClick}
      attr={{
        role: "tab",
        "aria-labelledby": tabID,
        "aria-selected": selected,
        title: tooltip,
        style,
        className: cn("skc-tab", selected && "skc-tab--selected", className),
      }}
      element={element}
    >
      <div className="skc-tab__content">
        {icon && <div className="skc-tab__icon">{icon}</div>}
        {label && (
          <span id={tabID} className="skc-tab__label">
            {label}
          </span>
        )}
        {selected && (
          <motion.span
            aria-hidden
            layoutId={containerID}
            transition={transition(duration.medium4, easing.standard)}
            className="skc-tab__indicator"
          />
        )}
      </div>
    </Interactive>
  );
};

Tab.displayName = "Tab";

export default Tab;

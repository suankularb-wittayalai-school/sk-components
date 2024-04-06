import "@suankularb-components/css/dist/css/components/table-cell.css";
import { motion } from "framer-motion";
import {
  Children,
  ComponentProps,
  ReactNode,
  cloneElement,
  createElement,
  useRef,
  useState,
} from "react";
import { StylableFC } from "../../types";
import { useRipple } from "../../utils/animation";
import { cn } from "../../utils/className";
import MaterialIcon from "../MaterialIcon";
import Menu from "../Menu";

/**
 * A cell of a Table.
 *
 * @param children The content of the cell.
 * @param header If the cell is a header cell, Table Cell will use `<th>` instead of `<td>`.
 * @param align How the Buttons should be positioned. It can be aligned to the left, the center (default), or the right.
 * @param menu An inline menu. This is useful for editable tables.
 * @param onMenuToggle Triggers on click if defined.
 * @param tdAttr Attributes for the underlying `<td>` element.
 */
const TableCell: StylableFC<{
  /**
   * The content of the cell.
   *
   * - Always required.
   */
  children: ReactNode;

  /**
   * If the cell is a header cell, Table Cell will use `<th>` instead of `<td>`.
   *
   * - Optional.
   */
  header?: boolean;

  /**
   * How the Buttons should be positioned. It can be aligned to the left, the
   * center (default), or the right.
   *
   * - Must be `left`, `center`, `right`.
   * - Optional.
   */
  align?: "left" | "center" | "right";

  /**
   * An inline menu. This is useful for editable tables.
   *
   * - Optional.
   */
  menu?: JSX.Element;

  /**
   * Triggers on click if defined.
   *
   * - If this is defined, a dropdown button appears.
   * - Optional.
   */
  onMenuToggle?: () => any;

  /**
   * Attributes for the underlying `<td>` element.
   *
   * - Optional.
   */
  tdAttr?: ComponentProps<"td" | "th">;
}> = ({
  children,
  header,
  align = "center",
  menu,
  onMenuToggle,
  tdAttr,
  element,
  style,
  className,
}) => {
  // Ripple setup
  const toggleRef = useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(toggleRef);

  // Menu
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return createElement(
    element || header ? "th" : "td",
    {
      style,
      className: cn(
        "skc-table-cell",
        header && "skc-table-cell--header",
        {
          left: "skc-table-cell--left",
          center: "skc-table-cell--center",
          right: "skc-table-cell--right",
        }[align],
        className,
      ),
      ...rippleListeners,
      ...tdAttr,
    },
    menu ? (
      <>
        {/* Toggle */}
        <button
          ref={toggleRef}
          className="skc-table-cell__menu-toggle"
          onClick={() => {
            onMenuToggle?.();
            setMenuOpen(!menuOpen);
          }}
        >
          <div className="skc-table-cell__content">{children}</div>
          <MaterialIcon icon="arrow_drop_down" />
        </button>

        {/* Ripple */}
        <div aria-hidden className="skc-table-cell__ripple-container">
          <motion.span
            initial={{ scale: 0, opacity: 0.36 }}
            animate={rippleControls}
            className="skc-table-cell__ripple"
            style={rippleStyle}
          />
        </div>

        {/* Menu */}
        {cloneElement(
          <Menu>
            {Children.map(menu.props.children, (menuItem) =>
              // Menu Item
              cloneElement(menuItem, {
                onClick: () => {
                  const { onClick } = menuItem.props;
                  onClick?.();
                  setMenuOpen(false);
                },
              }),
            )}
          </Menu>,
          { pen: menuOpen, onBlur: () => setMenuOpen(false) },
        )}
      </>
    ) : (
      <div className="skc-table-cell__content">{children}</div>
    ),
  );
};

TableCell.displayName = "TableCell";

export default TableCell;

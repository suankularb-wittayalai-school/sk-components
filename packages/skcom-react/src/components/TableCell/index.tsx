// External libraries
import { motion } from "framer-motion";
import * as React from "react";

// Internal components
import { MaterialIcon } from "../MaterialIcon";
import { Menu } from "../Menu";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/table-cell.css";

// Utilities
import { useRipple } from "../../utils/animation";
import { cn } from "../../utils/className";

/**
 * Props for {@link TableCell Table Body}.
 */
export interface TableCellProps extends SKComponent {
  /**
   * The content of the cell.
   *
   * - Always required.
   */
  children: React.ReactNode;

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
   * - If this is defined, a dropdown button appears.
   * - Optional.
   */
  onMenuToggle?: () => any;

  /**
   * @deprecated Use the `element` prop instead.
   */
  tdAttr?: React.ComponentProps<"td" | "th">;
}

/**
 * A cell of a Table.
 *
 * @param children The content of the cell.
 * @param header If the cell is a header cell, Table Cell will use `<th>` instead of `<td>`.
 * @param align How the Buttons should be positioned. It can be aligned to the left, the center (default), or the right.
 * @param menu An inline menu. This is useful for editable tables.
 * @param onMenuToggle Triggers on click if defined.
 */
export function TableCell({
  children,
  header,
  align,
  menu,
  onMenuToggle,
  element,
  style,
  className,
}: TableCellProps) {
  const Element = element || (header ? "th" : "td");

  // Ripple setup
  const toggleRef = React.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(toggleRef);

  // Menu
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  return (
    <Element
      style={style}
      className={cn([
        "skc-table-cell",
        header && "skc-table-cell--header",
        align === "left"
          ? "skc-table-cell--left"
          : align === "right"
            ? "skc-table-cell--right"
            : "skc-table-cell--center",
        className,
      ])}
      {...rippleListeners}
    >
      {menu ? (
        <>
          {/* Toggle */}
          <button
            ref={toggleRef}
            className="skc-table-cell__menu-toggle"
            onClick={() => {
              if (onMenuToggle) onMenuToggle();
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
          {React.cloneElement(
            <Menu>
              {React.Children.map(menu.props.children, (menuItem) =>
                // Menu Item
                React.cloneElement(menuItem, {
                  onClick: () => {
                    const { onClick } = menuItem.props;
                    if (onClick) onClick();
                    setMenuOpen(false);
                  },
                }),
              )}
            </Menu>,
            { open: menuOpen, onBlur: () => setMenuOpen(false) },
          )}
        </>
      ) : (
        <div className="skc-table-cell__content">{children}</div>
      )}
    </Element>
  );
}

TableCell.displayName = "TableCell";

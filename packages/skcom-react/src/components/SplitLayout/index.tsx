import "@suankularb-components/css/dist/css/components/split-layout.css";
import { ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";
import { useBreakpoint } from "../../utils/window";

/**
 * List-detail views and supporting panel layouts can be created with Vertical
 * Split Layout.
 *
 * In a list-detail view, the left side is a list and the right is the list’s
 * detail. In a supporting panel layout, the main content takes focus with a
 * small column set aside for supporting content.
 *
 * @param children The content should have 2 sides; each element entered corresponds to a side.
 * @param ratio Choose from 2 presets or create your own. This uses the same grid system as Columns, so ensure each side of the ratio adds up to 12.
 * @param showRightOnMobile Show the right side below the left side instead of hiding it on mobile.
 */
const SplitLayout: StylableFC<{
  /**
   * The content should have 2 sides; each element entered corresponds to a
   * side.
   *
   * - Must have 2 elements.
   * - Always required.
   */
  children: ReactNode;

  /**
   * Choose from 2 presets or create your own. This uses the same grid system
   * as Columns, so ensure each side of the ratio adds up to 12.
   *
   * - If you choose to use a preset: must be `list-detail` or
   *   `supporting-panel`. Learn more about these Material Design’s
   *   documentation.
   * - If you choose to create a custom ratio: must be an array with 2
   *   numbers, the first being the left and the last being the right.
   * - Always required.
   */
  ratio: "list-detail" | "supporting-panel" | [number, number];

  /**
   * On mobile, there is not enough space 2 have to columns on screen at once,
   * so the right side disappears by default. Enabling `showRightOnMobile`
   * will show the right side below the left side.
   *
   * - Optional.
   */
  showRightOnMobile?: boolean;
}> = ({
  children,
  ratio,
  showRightOnMobile,
  element: Element = "section",
  style,
  className,
}) => {
  const { atBreakpoint } = useBreakpoint();
  const colSpans = {
    lg: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // 12 columns
    md: [2, 2, 4, 4, 6, 6, 6, 8, 8, 10, 10], // 12 columns
    sm: [2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6], // 8 columns
  };

  return (
    <Element
      style={style}
      className={cn(
        "skc-split-layout",
        typeof ratio === "string" &&
          {
            "list-detail": "skc-split-layout--list-detail",
            "supporting-panel": "skc-split-layout--supporting-panel",
          }[ratio],
        showRightOnMobile && "skc-split-layout--persist-right",
        className,
      )}
    >
      <div
        className="skc-split-layout__content"
        style={{
          gridTemplateColumns:
            typeof ratio !== "string" && atBreakpoint !== "base"
              ? ratio
                  .map((size) => `${colSpans[atBreakpoint][size - 1]}fr`)
                  .join(" ")
              : undefined,
        }}
      >
        {children}
      </div>
    </Element>
  );
};

SplitLayout.displayName = "SplitLayout";

export default SplitLayout;

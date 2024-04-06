import "@suankularb-components/css/dist/css/components/content-layout.css";
import { ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";

/**
 * A simple width-clamped vertical flow of content with minimal default styling.
 *
 * @param children The main content of a page is grouped into Sections inside of a Content Layout.
 */
const ContentLayout: StylableFC<{
  /**
   * The main content of a page is grouped into Sections inside of a Content
   * Layout.
   *
   * - Must only have Sections.
   * - Always required.
   */
  children: ReactNode;
}> = ({ children, element: Element = "main", style, className }) => {
  return (
    <Element style={style} className={cn(`skc-content-layout`, className)}>
      <div className="skc-content-layout__content">{children}</div>
    </Element>
  );
};

ContentLayout.displayName = "ContentLayout";

export default ContentLayout;

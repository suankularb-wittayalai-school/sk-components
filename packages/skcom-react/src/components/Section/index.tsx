import "@suankularb-components/css/dist/css/components/section.css";
import { cn } from "../../utils/className";
import { matchDisplayName } from "../../utils/displayName";
import { dash } from "radash";
import { StylableFC } from "../../types";
import { Children, ComponentProps, ReactNode, cloneElement } from "react";
import Header from "../Header";

/**
 * Section is a way to group content under one Header.
 *
 * @param children Section must have exactly 1 Header as the first direct descendent. After that, it can include anything.
 */
const Section: StylableFC<{
  /**
   * Section must have exactly 1 Header as the first direct descendent. After
   * that, it can include anything.
   *
   * - Always required.
   */
  children: ReactNode;
}> = ({ children, element: Element = "section", style, className }) => {
  // Find the Header in `children` and modify it to include `id`
  // This ID is generated from the text inside Header

  // Section uses this ID to link the `section` element and the `<h2>`-`<h6>`
  // element together, so screenreaders understand this section as a “region”
  // with Header as its name.

  let headerID: string | undefined;

  return (
    <Element style={style} className={cn("skc-section", className)}>
      {
        // For each child in `children`
        Children.map(children, (child) => {
          // If Header is found, grab the text and generate the ID, then modify the
          // Header to include the ID with the `id` attribute. This ID will be
          // referred to by Section.

          if (matchDisplayName(child, "Header")) {
            // Generate the ID
            headerID = `header-${dash((child as JSX.Element).props.children)}`;

            // Modify the Header to include ID
            const { element: HeaderElement } = (child as JSX.Element).props;
            return cloneElement(child as JSX.Element, {
              element: (props) => <HeaderElement {...props} id={headerID} />,
            } satisfies Partial<ComponentProps<typeof Header>>);
          }

          // If not, return the child unchanged
          return child;
        })
      }
    </Element>
  );
};

Section.displayName = "Section";

export default Section;

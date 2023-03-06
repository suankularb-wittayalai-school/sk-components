// External libraries
import { motion, useAnimationControls } from "framer-motion";
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/content-layout.css";

// Utilities
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";

/**
 * How 2 pages are related in the page hierarchy.
 */
type PageRelation = "parent" | "child" | "sibling" | "unrelated";

/**
 * Props for {@link ContentLayout Content Layout}.
 */
export interface ContentLayoutProps extends SKComponent {
  /**
   * The main content of a page is grouped into Sections inside of a Content
   * Layout.
   *
   * - Must only have Sections.
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * How this page relates to the previous page and the destination page.
   * This is useful if you want your application to have a coherent spatial
   * animation, i.e. a quick fade for top-level pages and forward-backward
   * transitions for traversing up and down the page hierarchy.
   *
   * - Must be an object with 2 keys: `previous` and `destination`.
   *   - `previous` refers to the relationship between the current page and the
   *     page the user has just arrived from. This is used to create the
   *     entrance animation of this page.
   *   - `destination` refers to the relationship between the current page and
   *     the page the user is going to, and is usually only defined after the
   *     user just clicked a link to another page in your application. This is
   *     used to create the exit animation of this page.
   * - Each key can have either `parent`, `child`, `sibling`, or `unrelated` as
   *   its value.
   * - If you’re using the Suankularb Next.js Template, the `usePageRelations`
   *   hook found in `@/utils/routing.ts` provides this property.
   * - Optional but recommended.
   */
  pageRelations?: Partial<{
    /**
     * The relationship between the current page and the page the user has just
     * arrived from. This is used to create the entrance animation of this
     * page.
     */
    previous: PageRelation;

    /**
     * `destination` refers to the relationship between the current page and
     * the page the user is going to, and is usually only defined after the
     * user just clicked a link to another page in your application. This is
     * used to create the exit animation of this page.
     */
    destination: PageRelation;
  }>;
}

/**
 * A simple width-clamped vertical flow of content with minimal default styling.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.gxd7ps11kchv SKCom documentation}
 *
 * @param children The main content of a page is grouped into Sections inside of a Content Layout.
 */
export function ContentLayout({
  children,
  pageRelations,
  style,
  className,
}: ContentLayoutProps) {
  const { duration, easing } = useAnimationConfig();
  // const mainControls = useAnimationControls();

  const entranceVariants = {
    // Transition from parent page
    parent: {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 },
    },
    // Transition from child page
    child: {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 },
    },
    // Transition from sibling page
    sibling: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    // Transition from unrelated page
    unrelated: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: transition(duration.short4, easing.standard),
    },
  };

  const exitVariants = {
    // Transition to parent page
    parent: {
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -60 },
    },
    // Transition to child page
    child: {
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 60 },
    },
    // Transition to sibling page
    sibling: {
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    // Transition to unrelated page
    unrelated: {
      animate: { opacity: 1 },
      exit: {
        opacity: 0,
      },
    },
  };

  // function animateEntrance(entranceType: PageRelation) {
  //   if (entranceType === "parent") {
  //     mainControls.set({ opacity: 0, x: 60 });
  //     mainControls.start({ opacity: 1, x: 0 });
  //   } else if (entranceType === "child") {
  //     mainControls.set({ opacity: 0, x: -60 });
  //     mainControls.start({ opacity: 1, x: 0 });
  //   } else if (entranceType === "sibling") {
  //     mainControls.set({ opacity: 0, x: "-100%" });
  //     mainControls.start({ opacity: 1, x: "0%" });
  //   } else if (entranceType === "unrelated") {
  //     mainControls.set({ opacity: 0 });
  //     mainControls.start({ opacity: 1 });
  //   }
  // }

  // function animateExit(exitType: PageRelation) {
  //   console.log(exitType);

  //   if (exitType === "parent") {
  //     mainControls.set({ opacity: 1, x: 0 });
  //     mainControls.start({ opacity: 0, x: -60 });
  //   } else if (exitType === "child") {
  //     mainControls.set({ opacity: 1, x: 0 });
  //     mainControls.start({ opacity: 0, x: 60 });
  //   } else if (exitType === "sibling") {
  //     mainControls.set({ opacity: 1, x: "0%" });
  //     mainControls.start({ opacity: 0, x: "100%" });
  //   }
  //   else if (exitType === "unrelated") {
  //     mainControls.set({ opacity: 1 });
  //     mainControls.start({ opacity: 0 });
  //   }
  // }

  // React.useEffect(() => {
  //   if (pageRelations && !pageRelations.previous) return;

  //   // Handle exit if destination defined
  //   if (pageRelations?.destination) {
  //     if (pageRelations && !pageRelations.destination) return;
  //     const exitType = pageRelations?.destination || "unrelated";
  //     animateExit(exitType);
  //   }

  //   // Handle entrance
  //   const entranceType = pageRelations?.previous || "unrelated";
  //   animateEntrance(entranceType);
  // }, [pageRelations]);

  React.useEffect(() => {
    console.log({
      ...pageRelations,
      isRendered:
        (!pageRelations || pageRelations.previous) &&
        !(pageRelations && pageRelations.destination),
    });
  }, [pageRelations]);

  return (
    <>
      {
        // If `pageRelations` is passed in, then we wait for `previous` to be
        // defined to let the Content Layout render
        (!pageRelations || pageRelations.previous) &&
          // Immediately as `destination` is defined, remove the Content Layout
          // !(pageRelations && pageRelations.destination) &&
          (
            <motion.main
              initial={
                entranceVariants[pageRelations?.previous || "unrelated"].initial
              }
              animate={
                pageRelations?.destination
                  ? exitVariants[pageRelations.destination].animate
                  : entranceVariants[pageRelations?.previous || "unrelated"]
                      .animate
              }
              exit={
                exitVariants[pageRelations?.destination || "unrelated"].exit
              }
              transition={
                pageRelations?.previous === "unrelated"
                  ? transition(duration.short4, easing.standard)
                  : transition(duration.long4, easing.standard)
              }
              // animate={mainControls}
              // transition={transition(duration.long4, easing.standard)}
              style={style}
              className={cn(["skc-content-layout", className])}
            >
              <div className="skc-content-layout__content">{children}</div>
            </motion.main>
          )
      }
    </>
  );
}

ContentLayout.displayName = "ContentLayout";

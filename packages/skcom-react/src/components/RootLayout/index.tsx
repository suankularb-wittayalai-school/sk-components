// External libraries
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/root-layout.css";

// Utilities
import { cn } from "../../utils/className";
import { transition, useAnimationConfig } from "../../utils/animation";

/**
 * How 2 pages are related in the page hierarchy.
 */
type PageRelation = "parent" | "child" | "sibling" | "unrelated";

/**
 * Props for {@link RootLayout Root Layout}.
 */
export interface RootLayoutProps extends SKComponent {
  /**
   * Root Layout positions Navigation Drawer, Navigation Bar, and FAB. It can
   * contain Navigation Drawer, Navigation Bar, FAB, Page Header, Content
   * Layout, and Vertical Split Layout only.
   *
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
 * The container of everything inside an application. Components which must
 * appear only once in like Navigation Drawer, Navigation Bar, FAB, and Page
 * Header only work optimally as direct descendants of Root Layout.
 *
 * Root Layout handles positioning of components and responsiveness.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.q72flzs8g2k1 SKCom documentation}
 *
 * @param children Root Layout positions Navigation Drawer, Navigation Bar, and FAB. It can contain Navigation Drawer, Navigation Bar, FAB, Page Header, Content Layout, and Vertical Split Layout only.
 */
export function RootLayout({
  children,
  pageRelations,
  className,
  style,
}: RootLayoutProps) {
  // Seperate children into:
  // - Persistent components (like Navigation Bar and Page Header) that won’t animate, and
  // - Page content that will animate
  let content;
  const persistentComponents = React.Children.map(children, (child) => {
    if ((child as JSX.Element)?.type.displayName) return child;
    else content = child;
  });

  const { duration, easing } = useAnimationConfig();
  const [animating, setAnimating] = React.useState<boolean>(false);
  const contentControls = useAnimationControls();

  async function animateEntrance(entranceType: PageRelation) {
    console.log(`handling entrance with type ${entranceType}`);
    setAnimating(true);
    if (entranceType === "parent") {
      contentControls.set({ x: 60 });
      await contentControls.start({ x: 0 });
    } else if (entranceType === "child") {
      contentControls.set({ x: -60 });
      await contentControls.start({ x: 0 });
    } else if (entranceType === "sibling") {
      contentControls.set({ x: "-100%" });
      await contentControls.start({ x: "0%" });
    }
  }

  async function animateExit(exitType: PageRelation) {
    console.log(`handling exit with type ${exitType}`);
    setAnimating(true);
    if (exitType === "parent") {
      contentControls.set({ x: 0 });
      await contentControls.start({ x: 60 });
    } else if (exitType === "child") {
      contentControls.set({ x: 0 });
      await contentControls.start({ x: -60 });
    } else if (exitType === "sibling") {
      contentControls.set({ x: "0%" });
      await contentControls.start({ x: "100%" });
    }
  }

  React.useEffect(() => {
    const handleTransition = async () => {
      console.log("==========\nstart of transition handling");
      console.log(pageRelations);

      if (pageRelations && !pageRelations.previous) {
        console.log("entrance requirements not met, ENDING");
        return;
      }

      // Handle exit if destination defined
      if (pageRelations?.destination) {
        const exitType = pageRelations.destination;
        animateExit(exitType);
      }

      // Handle entrance
      const entranceType = pageRelations?.previous || "unrelated";
      animateEntrance(entranceType);

      console.log("transition complete, ENDING");
    };

    if (animating) return;
    handleTransition();
    setAnimating(false);
  }, [pageRelations]);

  return (
    <div style={style} className={cn(["skc-root-layout", className])}>
      {persistentComponents}
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          animate={contentControls}
          transition={transition(duration.long4, easing.standard)}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

RootLayout.displayName = "RootLayout";

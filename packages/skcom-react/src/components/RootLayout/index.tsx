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

  transitionEvent?: "parent" | "child" | "sibling" | "unrelated";
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
  transitionEvent,
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
  // const [animating, setAnimating] = React.useState<boolean>(false);
  const contentControls = useAnimationControls();

  // async function animateEntrance(entranceType: PageRelation) {
  //   console.log(`handling entrance with type ${entranceType}`);
  //   setAnimating(true);
  //   if (entranceType === "parent") {
  //     contentControls.set({ x: 60 });
  //     await contentControls.start({ x: 0 });
  //   } else if (entranceType === "child") {
  //     contentControls.set({ x: -60 });
  //     await contentControls.start({ x: 0 });
  //   } else if (entranceType === "sibling") {
  //     contentControls.set({ x: "-100%" });
  //     await contentControls.start({ x: "0%" });
  //   }
  // }

  // async function animateExit(exitType: PageRelation) {
  //   console.log(`handling exit with type ${exitType}`);
  //   setAnimating(true);
  //   if (exitType === "parent") {
  //     contentControls.set({ x: 0 });
  //     await contentControls.start({ x: 60 });
  //   } else if (exitType === "child") {
  //     contentControls.set({ x: 0 });
  //     await contentControls.start({ x: -60 });
  //   } else if (exitType === "sibling") {
  //     contentControls.set({ x: "0%" });
  //     await contentControls.start({ x: "100%" });
  //   }
  // }

  // React.useEffect(() => {
  //   const handleTransition = async () => {
  //     console.log("==========\nstart of transition handling");
  //     console.log(pageRelations);

  //     if (pageRelations && !pageRelations.previous) {
  //       console.log("entrance requirements not met, ENDING");
  //       return;
  //     }

  //     // Handle exit if destination defined
  //     if (pageRelations?.destination) {
  //       const exitType = pageRelations.destination;
  //       animateExit(exitType);
  //     }

  //     // Handle entrance
  //     const entranceType = pageRelations?.previous || "unrelated";
  //     animateEntrance(entranceType);

  //     console.log("transition complete, ENDING");
  //   };

  //   if (animating) return;
  //   handleTransition();
  //   setAnimating(false);
  // }, [pageRelations]);

  const enterTransition = transition(duration.medium2, easing.standard);
  const exitTransition = transition(
    duration.medium2,
    easing.standardDecelerate
  );

  React.useEffect(() => {
    const startTransition = async () => {
      contentControls.set({ x: 0, opacity: 1 });

      // Transition to a parent page
      if (transitionEvent === "parent") {
        await contentControls.start({
          x: 40,
          opacity: 0,
          transition: enterTransition,
        });
        contentControls.set({ x: -40, opacity: 0 });
        contentControls.start({ x: 0, opacity: 1, transition: exitTransition });
      }

      // Transition to a child page
      else if (transitionEvent === "child") {
        await contentControls.start({
          x: -40,
          opacity: 0,
          transition: enterTransition,
        });
        contentControls.set({ x: 40, opacity: 0 });
        contentControls.start({ x: 0, opacity: 1, transition: exitTransition });
      }
    };
    startTransition();
  }, [transitionEvent]);

  return (
    <div style={style} className={cn(["skc-root-layout", className])}>
      {persistentComponents}
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div animate={contentControls}>{content}</motion.div>
      </AnimatePresence>
    </div>
  );
}

RootLayout.displayName = "RootLayout";

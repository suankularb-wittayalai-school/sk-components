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

  /**
   * The definition of `transitionEvent` will cause the current page to
   * immediately animate out and the next to animate in. The style in which
   * this animation is according to the next page’s relation to the current
   * according to the page hierarchy, which is passed in via this property.
   *
   * - Defined when an animation to the next page is needed immediately.
   * - How the next page is related to this page is passed in via this property.
   *   - i.e. If the user is on the `/lookup` page and just clicked a link to
   *     `/lookup/students`—a child page of `/lookup`—then `child` must
   *     immediately passed in to `transitionEvent` to start the animation.
   *
   * - If you are using
   *   {@link https://github.com/suankularb-wittayalai-school/sk-nextjs-template Suankularb Next.js Template},
   *   you can use the return value of `useTransitionEvent` hook (found in
   *   `@/utils/routing.ts`) in combination with `CustomPage.childURLs` here.
   *   - Find an example of `useTransitionEvent` in the Layout component of the
   *     demo app.
   *   - Find an example of `CustomPage.childURLs` in the index page of the
   *     demo app.
   *   - JSDoc available on all symbols referred to here.
   *
   * - Must be a type of page relation: `parent`, `child`, `sibling`, or `unrelated`.
   * - Optional.
   */
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
 * @param transitionEvent The definition of `transitionEvent` will cause the current page to immediately animate out and the next to animate in. The style in which this animation is according to the next page’s relation to the current according to the page hierarchy, which is passed in via this property.
 */
export function RootLayout({
  children,
  transitionEvent,
  className,
  style,
}: RootLayoutProps) {
  // Children

  // Seperate children into:
  // - Persistent components (like Navigation Bar and Page Header) that won’t animate, and
  // - Page content that will animate
  let content;
  const persistentComponents = React.Children.map(children, (child) => {
    if ((child as JSX.Element)?.type.displayName) return child;
    else content = child;
  });

  // Page transition

  // Animation setup
  const { duration, easing } = useAnimationConfig();
  const contentControls = useAnimationControls();

  // Transition duration and easing
  const enterTransition = transition(duration.medium2, easing.standard);
  const exitTransition = transition(
    duration.medium2,
    easing.standardDecelerate
  );

  // Transition execution

  // (@SiravitPhokeed)
  // KNOWN ISSUE (that I’m not gonna fix yet because I just can’t anymore):
  // If the page takes more than like half a second to load then the old page
  // is still visible even after the transition is done, then after a few
  // seconds the new page fades in. It’s weird. We might need to check for page
  // load completion (like `routeChangeComplete` in Next.js) before we go ahead
  // with the enter animation.

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
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key="content" animate={contentControls}>
          {content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

RootLayout.displayName = "RootLayout";

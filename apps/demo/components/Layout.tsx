// External libraries
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { FC, forwardRef, LegacyRef, ReactNode, useState } from "react";

// SK Components
import {
  MaterialIcon,
  NavBar,
  NavBarItem,
  NavDrawer,
  NavDrawerItem,
  NavDrawerSection,
  PageHeader,
  Progress,
  RootLayout,
} from "@suankularb-components/react";

// Internal components
import Favicon from "@/components/Favicon";

// Utilities
import { usePageIsLoading, useTransitionEvent } from "@/utils/routing";
import { CustomPage } from "@/utils/types";

const Layout: FC<
  { children: ReactNode } & Pick<CustomPage, "fab" | "pageHeader" | "childURLs">
> = ({ children, fab, pageHeader, childURLs }) => {
  const router = useRouter();
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const { pageIsLoading } = usePageIsLoading();
  const { transitionEvent } = useTransitionEvent(
    pageHeader?.parentURL,
    childURLs
  );

  const getIsSelected = (pattern: RegExp) => pattern.test(router.pathname);

  return (
    <RootLayout transitionEvent={transitionEvent}>
      {/* Navigation Drawer */}
      <NavDrawer open={navOpen} onClose={() => setNavOpen(false)}>
        {/* Top-level pages */}
        <NavDrawerSection
          header={
            <div className="skc-title-large">
              <span>SK</span>
              <span className="text-primary font-bold">Components</span>
            </div>
          }
          alt="SK Components"
        >
          <NavDrawerItem
            icon={<MaterialIcon icon="info" />}
            label="About"
            selected={router.pathname === "/"}
            href="/"
            element={Link}
          />
          <NavDrawerItem
            icon={<MaterialIcon icon="widgets" />}
            label="Components"
            selected={router.pathname === "/components"}
            href="/components"
            element={Link}
          />
          <NavDrawerItem
            icon={<MaterialIcon icon="capture" />}
            label="Examples"
            selected={getIsSelected(/^\/example/)}
            href="/example"
            element={Link}
          />
          <NavDrawerItem
            icon={<MaterialIcon icon="description" />}
            label="Docs"
            href="https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing"
            element={forwardRef((props, ref) => (
              <a
                {...props}
                ref={ref as LegacyRef<HTMLAnchorElement>}
                target="_blank"
                rel="noreferrer"
              >
                {props.children}
              </a>
            ))}
          />
        </NavDrawerSection>

        {/* Components */}
        <NavDrawerSection header="Components">
          <NavDrawerItem
            icon={<MaterialIcon icon="touch_app" />}
            label="Actions"
            selected={router.pathname === "/components/actions"}
            href="/components/actions"
            element={Link}
          />
          <NavDrawerItem
            icon={<MaterialIcon icon="input" />}
            label="Input"
            selected={router.pathname === "/components/input"}
            href="/components/input"
            element={Link}
          />
          <NavDrawerItem
            icon={<MaterialIcon icon="swap_horizontal" />}
            label="Communication"
            selected={router.pathname === "/components/communication"}
            href="/components/communication"
            element={Link}
          />
          <NavDrawerItem
            icon={<MaterialIcon icon="dashboard" />}
            label="Containers"
            selected={router.pathname === "/components/containers"}
            href="/components/containers"
            element={Link}
          />
        </NavDrawerSection>

        {/* Other */}
        <NavDrawerSection header="Other">
          <NavDrawerItem
            icon={<MaterialIcon icon="handshake" />}
            label="Contribute"
            href="https://github.com/suankularb-wittayalai-school/sk-components"
            element={forwardRef((props, ref) => (
              <a {...props} ref={ref} target="_blank" rel="noreferrer">
                {props.children}
              </a>
            ))}
          />
        </NavDrawerSection>
      </NavDrawer>

      {/* Navigation Bar/Rail */}
      <NavBar
        brand={
          <Image
            src="/images/logo.svg"
            priority
            width={56}
            height={56}
            alt=""
          />
        }
        fab={fab}
        onNavToggle={() => setNavOpen(true)}
      >
        <NavBarItem
          icon={<MaterialIcon icon="info" />}
          label="About"
          selected={getIsSelected(/^\/$/)}
          href="/"
          element={Link}
        />
        <NavBarItem
          icon={<MaterialIcon icon="widgets" />}
          label="Components"
          selected={getIsSelected(/^\/components/)}
          href="/components"
          element={Link}
        />
        <NavBarItem
          icon={<MaterialIcon icon="capture" />}
          label="Examples"
          selected={getIsSelected(/^\/example/)}
          href="/example"
          element={Link}
        />
        <NavBarItem
          icon={<MaterialIcon icon="description" />}
          label="Docs"
          href="https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing"
          element={forwardRef((props, ref) => (
            <a
              {...props}
              ref={ref as LegacyRef<HTMLAnchorElement>}
              target="_blank"
              rel="noreferrer"
            >
              {props.children}
            </a>
          ))}
        />
      </NavBar>

      {/* Page Header */}
      {pageHeader && (
        <PageHeader
          brand={<Favicon />}
          homeURL="/"
          element={Link}
          onNavToggle={() => setNavOpen(true)}
          {...pageHeader}
        />
      )}

      {/* Page loading indicator */}
      <Progress
        appearance="linear"
        alt="Loading page…"
        visible={pageIsLoading}
      />

      {/* Content */}
      {children}
    </RootLayout>
  );
};

export default Layout;

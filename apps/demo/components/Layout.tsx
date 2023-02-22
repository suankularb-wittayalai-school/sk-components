// External libraries
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { FC, forwardRef, ReactNode, useState } from "react";

// SK Components
import {
  MaterialIcon,
  NavBar,
  NavBarItem,
  NavDrawer,
  NavDrawerItem,
  NavDrawerSection,
  PageHeader,
  PageHeaderProps,
  RootLayout,
} from "@suankularb-components/react";

// Internal components
import Favicon from "@/components/Favicon";

const Layout: FC<{
  children: ReactNode;
  fab?: JSX.Element;
  pageHeader?: Partial<PageHeaderProps>;
}> = ({ children, fab, pageHeader }) => {
  const router = useRouter();
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const getIsSelected = (pattern: RegExp) => pattern.test(router.pathname);

  return (
    <RootLayout>
      {/* Navigation Drawer */}
      <NavDrawer open={navOpen} onClose={() => setNavOpen(false)}>
        <NavDrawerSection
          header={
            <div className="skc-title-large">
              <span>SK</span>
              <span className="font-black text-blue-900 dark:text-blue-300">
                Components
              </span>
            </div>
          }
          alt="SK Components"
        >
          <NavDrawerItem
            icon={<MaterialIcon icon="touch_app" />}
            label="Actions"
            selected={getIsSelected(/\/actions$/)}
            href="/actions"
            element={Link}
          />
          <NavDrawerItem
            icon={<MaterialIcon icon="input" />}
            label="Input"
            selected={getIsSelected(/\/input$/)}
            href="/input"
            element={Link}
          />
          <NavDrawerItem
            icon={<MaterialIcon icon="subdirectory_arrow_right" />}
            label="Navigation"
            selected={getIsSelected(/\/navigation$/)}
            href="/navigation"
            element={Link}
          />
          <NavDrawerItem
            icon={<MaterialIcon icon="dashboard" />}
            label="Containers"
            selected={getIsSelected(/\/containers$/)}
            href="/containers"
            element={Link}
          />
        </NavDrawerSection>
        <NavDrawerSection header="About">
          <NavDrawerItem
            icon={<MaterialIcon icon="info" />}
            label="About"
            href="/"
            element={Link}
          />
          <NavDrawerItem
            icon={<MaterialIcon icon="description" />}
            label="Documentation"
            href="https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing"
            element={forwardRef((props, ref) => (
              <a {...props} ref={ref} target="_blank" rel="noreferrer">
                {props.children}
              </a>
            ))}
          />
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
          icon={<MaterialIcon icon="touch_app" />}
          label="Actions"
          selected={getIsSelected(/\/actions$/)}
          href="/actions"
          element={Link}
        />
        <NavBarItem
          icon={<MaterialIcon icon="input" />}
          label="Input"
          selected={getIsSelected(/\/input$/)}
          href="/input"
          element={Link}
        />
        <NavBarItem
          icon={<MaterialIcon icon="subdirectory_arrow_right" />}
          label="Navigation"
          selected={getIsSelected(/\/navigation$/)}
          href="/navigation"
          element={Link}
        />
        <NavBarItem
          icon={<MaterialIcon icon="dashboard" />}
          label="Containers"
          selected={getIsSelected(/\/containers$/)}
          href="/containers"
          element={Link}
        />
      </NavBar>

      {/* Page Header */}
      <PageHeader
        title="SK Components Demo"
        brand={<Favicon />}
        homeURL="/"
        element={Link}
        onNavToggle={() => setNavOpen(true)}
        {...pageHeader}
      />

      {/* Content */}
      {children}
    </RootLayout>
  );
};

export default Layout;

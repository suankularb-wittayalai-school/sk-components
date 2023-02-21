// External libraries
import Image from "next/image";
import Link from "next/link";

import { FC, ReactNode, useState } from "react";

// SK Components
import {
  FAB,
  MaterialIcon,
  NavBar,
  NavBarItem,
  NavDrawer,
  NavDrawerItem,
  NavDrawerSection,
  PageHeader,
  RootLayout,
  ThemeProvider,
} from "@suankularb-components/react";
import Favicon from "./Favicon";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <ThemeProvider>
      <RootLayout>
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
              icon={<MaterialIcon icon="school" />}
              label="Learn"
              selected
              href="/"
              element={Link}
            />
            <NavDrawerItem
              icon={<MaterialIcon icon="groups" />}
              label="Class"
              href="/"
              element={Link}
            />
            <NavDrawerItem
              icon={<MaterialIcon icon="search" />}
              label="Lookup"
              href="/"
              element={Link}
            />
            <NavDrawerItem
              icon={<MaterialIcon icon="account_circle" />}
              label="Account"
              metadata="7 messages"
              href="/"
              element={Link}
            />
          </NavDrawerSection>
          <NavDrawerSection header="M.504">
            <NavDrawerItem
              icon={<MaterialIcon icon="group" />}
              label="My teachers"
              href="/"
              element={Link}
            />
            <NavDrawerItem
              icon={<MaterialIcon icon="contacts" />}
              label="My classmates"
              href="/"
              element={Link}
            />
          </NavDrawerSection>
        </NavDrawer>
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
          fab={
            <FAB
              color="tertiary"
              size="large"
              icon={<MaterialIcon icon="add" />}
              alt="Add"
              stateOnScroll="disappear"
            />
          }
          end={
            <>
              <NavBarItem
                icon={<MaterialIcon icon="translate" />}
                label="เปลี่ยนภาษา"
                tooltip="Change language / เปลี่ยนภาษา"
                href="/"
                element={Link}
              />
              <NavBarItem
                icon={<MaterialIcon icon="logout" />}
                label="Log out"
                href="/"
                element={Link}
              />
            </>
          }
          onNavToggle={() => setNavOpen(true)}
        >
          <NavBarItem
            icon={<MaterialIcon icon="school" />}
            label="Learn"
            selected
            href="#"
            element={Link}
          />
          <NavBarItem
            icon={<MaterialIcon icon="groups" />}
            label="Class"
            href="#"
            element={Link}
          />
          <NavBarItem
            icon={<MaterialIcon icon="search" />}
            label="Lookup"
            href="#"
            element={Link}
          />
          <NavBarItem
            icon={<MaterialIcon icon="account_circle" />}
            label="Account"
            badge={7}
            href="#"
            element={Link}
          />
        </NavBar>
        <PageHeader
          title="Learn"
          brand={<Favicon />}
          homeURL="/"
          element={Link}
          onNavToggle={() => setNavOpen(true)}
        />
        {children}
      </RootLayout>
    </ThemeProvider>
  );
};
export default Layout;

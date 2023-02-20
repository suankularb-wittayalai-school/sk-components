// External libraries
import Image from "next/image";
import Link from "next/link";

import { FC, ReactNode, useState } from "react";

// SK Components
import {
  Button,
  FAB,
  MaterialIcon,
  NavBar,
  NavBarItem,
  NavDrawer,
  NavDrawerItem,
  NavDrawerSection,
  RootLayout,
} from "@suankularb-components/react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <RootLayout>
      <NavDrawer open={navOpen} onClose={() => setNavOpen(false)}>
        <NavDrawerSection
          header={
            <div className="title-large">
              <span>SK</span>
              <span className="font-black text-blue-900 dark:text-blue-300">
                Components
              </span>
            </div>
          }
        >
          <NavDrawerItem
            icon={<MaterialIcon icon="school" />}
            label="Learn"
            selected
            href="#"
          />
          <NavDrawerItem
            icon={<MaterialIcon icon="groups" />}
            label="Class"
            href="#"
          />
          <NavDrawerItem
            icon={<MaterialIcon icon="search" />}
            label="Lookup"
            href="#"
          />
          <NavDrawerItem
            icon={<MaterialIcon icon="account_circle" />}
            label="Account"
            metadata="2 messages"
            href="#"
          />
        </NavDrawerSection>
        <NavDrawerSection header="M.504">
          <NavDrawerItem
            icon={<MaterialIcon icon="group" />}
            label="My teachers"
            href="#"
          />
          <NavDrawerItem
            icon={<MaterialIcon icon="contacts" />}
            label="My classmates"
            href="#"
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
            alt="Simplified SKCom logo"
          />
        }
        fab={
          <FAB
            color="tertiary"
            size="large"
            icon={<MaterialIcon icon="add" />}
            stateOnScroll="disappear"
          />
        }
        end={
          <>
            <NavBarItem
              icon={<MaterialIcon icon="translate" />}
              label="เปลี่ยนภาษา"
              tooltip="Change language / เปลี่ยนภาษา"
              href="#"
            />
            <NavBarItem
              icon={<MaterialIcon icon="logout" />}
              label="Log out"
              href="#"
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
      <Button appearance="filled" onClick={() => setNavOpen(true)}>
        TEMP: Open Nav
      </Button>
      {children}
    </RootLayout>
  );
};
export default Layout;

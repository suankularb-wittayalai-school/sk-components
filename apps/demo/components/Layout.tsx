// External libraries
import Image from "next/image";
import Link from "next/link";

import { FC, ReactNode } from "react";

// SK Components
import {
  NavBar,
  FAB,
  MaterialIcon,
  NavBarItem,
  RootLayout,
} from "@suankularb-components/react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <RootLayout>
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
        onNavToggle={() => {}}
      >
        <NavBarItem
          icon={<MaterialIcon icon="school" />}
          label="Learn"
          selected
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
        <NavBarItem
          icon={<MaterialIcon icon="admin_panel_settings" />}
          label="Admin"
          badge={null}
          railOnly
          href="#"
          element={Link}
        />
      </NavBar>
      {children}
    </RootLayout>
  );
};
export default Layout;

// External libraries
import Link from "next/link";
import Image from "next/image";
import { FC, useContext } from "react";

// SK Components
import {
  AppDrawer,
  AppDrawerItem,
  AppDrawerSegment,
  PageHeaderProps,
  PageHeader as SKCPageHeader,
} from "@suankularb-components/react";

// Images
import SKComLogo from "@/public/images/logo.svg";

// Contexts
import NavDrawerContext from "@/contexts/NavDrawerContext";

const PageHeader: FC<
  Pick<PageHeaderProps, "children"> & Partial<PageHeaderProps>
> = (props) => {
  const { setNavOpen } = useContext(NavDrawerContext);

  return (
    <SKCPageHeader
      buttonElement={Link}
      onNavToggle={() => setNavOpen(true)}
      appDrawer={
        <AppDrawer>
          <AppDrawerSegment title="Demo apps">
            <AppDrawerItem
              logo={<Image src={SKComLogo} alt="" />}
              name="SKCom"
            />
          </AppDrawerSegment>
        </AppDrawer>
      }
      {...props}
    />
  );
};

export default PageHeader;

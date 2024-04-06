// External libraries
import Image from "next/image";
import Link from "next/link";
import { ComponentProps, FC, useContext } from "react";

// SK Components
import {
  AppDrawer,
  AppDrawerItem,
  AppDrawerSegment,
  PageHeader as SKCPageHeader,
} from "@suankularb-components/react";

// Images
import SKComLogo from "@/public/images/logo.svg";

// Contexts
import NavDrawerContext from "@/contexts/NavDrawerContext";

const PageHeader: FC<
  Pick<ComponentProps<typeof SKCPageHeader>, "children"> &
    Partial<ComponentProps<typeof SKCPageHeader>>
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

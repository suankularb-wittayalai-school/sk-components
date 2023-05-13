// External libraries
import Link from "next/link";
import { FC, useContext } from "react";

// SK Components
import {
  PageHeaderProps,
  Progress,
  PageHeader as SKCPageHeader,
} from "@suankularb-components/react";

// Internal components
import Favicon from "@/components/Favicon";

// Contexts
import NavDrawerContext from "@/contexts/NavDrawerContext";

// Utilities
import { usePageIsLoading } from "@/utils/routing";

const PageHeader: FC<
  Pick<PageHeaderProps, "title"> & Partial<PageHeaderProps>
> = (props) => {
  // Navigation Drawer toggle
  const { setNavOpen } = useContext(NavDrawerContext);

  // Page load
  const pageIsLoading = usePageIsLoading();

  return (
    <>
      <SKCPageHeader
        brand={<Favicon />}
        homeURL="/"
        buttonElement={Link}
        onNavToggle={() => setNavOpen(true)}
        {...props}
      />
      <Progress
        appearance="linear"
        alt="Loading page…"
        visible={pageIsLoading}
      />
    </>
  );
};

export default PageHeader;

// External libraries
import Link from "next/link";
import { FC, useContext } from "react";

// SK Components
import {
  PageHeaderProps,
  PageHeader as SKCPageHeader,
} from "@suankularb-components/react";

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
      {...props}
    />
  );
};

export default PageHeader;

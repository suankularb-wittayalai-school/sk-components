// External libraries
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  FC,
  forwardRef,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// SK Components
import {
  MaterialIcon,
  NavBar,
  NavBarItem,
  NavDrawer,
  NavDrawerItem,
  NavDrawerSection,
  Progress,
  RootLayout,
  Snackbar,
  SnackbarProps,
  Text,
} from "@suankularb-components/react";

// Contexts
import NavDrawerContext from "@/contexts/NavDrawerContext";
import SnackbarContext from "@/contexts/SnackbarContext";

// Utilities
import { usePageIsLoading } from "@/utils/routing";
import { CustomPage } from "@/utils/types";

const Layout: FC<
  { children: ReactNode } & Pick<CustomPage, "fab" | "parentURL" | "childURLs">
> = ({ children, fab, parentURL, childURLs }) => {
  // Navigation Bar and Drawer
  const router = useRouter();
  const pageIsLoading = usePageIsLoading();
  const { navOpen, setNavOpen } = useContext(NavDrawerContext);

  const getIsSelected = (pattern: RegExp) => pattern.test(router.pathname);

  // Snackbar
  const { snackbar } = useContext(SnackbarContext);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarProps, setSnackbarProps] = useState<SnackbarProps>();

  const showSnackbarAndWait = () => {
    setSnackbarProps(snackbar!.props);
    setSnackbarOpen(true);
    visibilityTimer = setTimeout(() => setSnackbarOpen(false), 6000);
  };

  let exitWait: NodeJS.Timeout;
  let visibilityTimer: NodeJS.Timeout;
  useEffect(() => {
    if (!snackbar) return;

    clearTimeout(exitWait);
    clearTimeout(visibilityTimer);

    if (snackbarOpen) {
      setSnackbarOpen(false);
      exitWait = setTimeout(showSnackbarAndWait, 200);
    } else showSnackbarAndWait();

    return () => {
      clearTimeout(exitWait);
      clearTimeout(visibilityTimer);
    };
  }, [snackbar]);

  return (
    <RootLayout>
      {/* Navigation Drawer */}
      <NavDrawer open={navOpen} onClose={() => setNavOpen(false)}>
        {/* Top-level pages */}
        <NavDrawerSection
          header={
            <Text type="title-large" element="div">
              <span>SK</span>
              <span className="text-primary font-bold">Components</span>
            </Text>
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
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing",
                undefined,
                "popup"
              )
            }
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
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing",
              undefined,
              "popup"
            )
          }
        />
      </NavBar>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        {...snackbarProps!}
      />

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

// External libraries
import { MotionConfig } from "framer-motion";
import {
  Inter,
  Space_Grotesk,
  Sarabun,
  IBM_Plex_Sans_Thai,
} from "next/font/google";
import { FC, ReactNode, useState } from "react";

// SK Components
import { ThemeProvider } from "@suankularb-components/react";

// Internal components
import Layout from "@/components/Layout";

// Contexts
import NavDrawerContext from "@/contexts/NavDrawerContext";
import PreviousRouteContext from "@/contexts/PreviousRouteContext";
import SnackbarContext from "@/contexts/SnackbarContext";

// Styles
import "@/styles/globals.css";

// Utilities
import { CustomAppProps } from "@/utils/types";
import { usePreviousPath } from "@/utils/routing";

// English fonts
const bodyFontEN = Inter({ subsets: ["latin"] });
const displayFontEN = Space_Grotesk({ subsets: ["latin"] });

// Thai fonts
const bodyFontTH = Sarabun({
  weight: ["300", "400", "500", "700"],
  subsets: ["thai"],
});
const displayFontTH = IBM_Plex_Sans_Thai({
  weight: ["300", "400", "500", "700"],
  subsets: ["thai"],
});

const Contexts: FC<{ children: ReactNode }> = ({ children }) => {
  const { previousPath } = usePreviousPath();
  const [snackbar, setSnackbar] = useState<JSX.Element | null>(null);
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <PreviousRouteContext.Provider value={previousPath}>
      <SnackbarContext.Provider value={{ snackbar, setSnackbar }}>
        <NavDrawerContext.Provider value={{ navOpen, setNavOpen }}>
          {children}
        </NavDrawerContext.Provider>
      </SnackbarContext.Provider>
    </PreviousRouteContext.Provider>
  );
};

export default function App({ Component, pageProps }: CustomAppProps) {
  const { fab, parentURL, childURLs } = Component;

  return (
    <>
      <style jsx global>{`
        :root {
          --font-body: -apple-system, BlinkMacSystemFont,
            ${bodyFontEN.style.fontFamily}, ${bodyFontTH.style.fontFamily};
          --font-display: ${displayFontEN.style.fontFamily},
            ${displayFontTH.style.fontFamily};
        }
      `}</style>

      <Contexts>
        <MotionConfig reducedMotion="user">
          <ThemeProvider>
            <Layout {...{ fab, parentURL, childURLs }}>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </MotionConfig>
      </Contexts>
    </>
  );
}

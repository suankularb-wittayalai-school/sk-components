// External libraries
import { MotionConfig } from "framer-motion";
import {
  Inter,
  Space_Grotesk,
  Sarabun,
  IBM_Plex_Sans_Thai,
} from "next/font/google";

// SK Components
import { ThemeProvider } from "@suankularb-components/react";

// Internal components
import Layout from "@/components/Layout";

// Contexts
import PreviousRouteContext from "@/contexts/PreviousRouteContext";

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

export default function App({ Component, pageProps }: CustomAppProps) {
  const { fab, pageHeader, childURLs } = Component;

  const { previousPath } = usePreviousPath();

  return (
    <>
      <style jsx global>{`
        :root {
          --font-body: ${bodyFontEN.style.fontFamily},
            ${bodyFontTH.style.fontFamily};
          --font-display: ${displayFontEN.style.fontFamily},
            ${displayFontTH.style.fontFamily};
        }
      `}</style>

      <PreviousRouteContext.Provider value={previousPath}>
        <MotionConfig reducedMotion="user">
          <ThemeProvider>
            <Layout {...{ fab, pageHeader, childURLs }}>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </MotionConfig>
      </PreviousRouteContext.Provider>
    </>
  );
}

// External libraries
import { MotionConfig } from "framer-motion";
import {
  Inter,
  Space_Grotesk,
  Sarabun,
  IBM_Plex_Sans_Thai,
} from "@next/font/google";

// SK Components
import { ThemeProvider } from "@suankularb-components/react";

// Internal components
import Layout from "@/components/Layout";

// Styles
import "@/styles/globals.css";

// Utilities
import { CustomAppProps } from "@/utils/types";

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
  const { fab, pageHeader } = Component;

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

      <MotionConfig reducedMotion="user">
        <ThemeProvider>
          <Layout {...{ fab, pageHeader }}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </MotionConfig>
    </>
  );
}

import type { AppProps } from "next/app";
import {
  Inter,
  Space_Grotesk,
  Sarabun,
  IBM_Plex_Sans_Thai,
} from "@next/font/google";

import "@/styles/globals.css";

const bodyFontEN = Inter({ subsets: ["latin"] });
const displayFontEN = Space_Grotesk({ subsets: ["latin"] });

const bodyFontTH = Sarabun({
  weight: ["300", "400", "500", "700"],
  subsets: ["thai"],
});
const displayFontTH = IBM_Plex_Sans_Thai({
  weight: ["300", "400", "500", "700"],
  subsets: ["thai"],
});

export default function App({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
    </>
  );
}

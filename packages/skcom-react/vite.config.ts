// import { Options } from "tsup";

// export const tsup: Options = {
//   splitting: true,
//   clean: true, // Clean up the dist folder
//   dts: true, // Generate dts files
//   format: ["cjs", "esm"], // Generate cjs and esm files
//   minify: true,
//   bundle: true,
//   entryPoints: ["src/index.ts"],
//   target: "es2020",
//   outDir: "dist",
//   entry: ["src/**/*.ts", "src/**/*.tsx"], // Include all files under src
//   injectStyle: true,
//   external: ["react", "framer-motion", "@tanstack/react-table"],
// };

// Since we are using Vite, we can use the Vite config file to configure our build.

// Path: packages/skcom-react/vite.config.ts
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "skcom-react",
      fileName: (format: string) => `skcom-react.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "framer-motion", "@tanstack/react-table"],
      output: {
        globals: {
          react: "React",
          "framer-motion": "framer-motion",
          "@tanstack/react-table": "react-table",
        },
      },
    },
  },
  plugins: [reactRefresh()],
});


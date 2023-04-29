import { Options } from "tsup";

export const tsup: Options = {
  splitting: true,
  clean: true, // Clean up the dist folder
  dts: true, // Generate dts files
  format: ["cjs", "esm"], // Generate cjs and esm files
  minify: true,
  bundle: true,
  entryPoints: ["src/index.ts"],
  target: "es2020",
  outDir: "dist",
  entry: ["src/**/*.ts", "src/**/*.tsx"], // Include all files under src
  injectStyle: true,
  external: ["react", "framer-motion", "@tanstack/react-table"],
};

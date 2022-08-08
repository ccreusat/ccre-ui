import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { defineConfig, RollupCommonJSOptions } from "vite";
import type { ModuleFormat } from "rollup";

export interface ViteRollupConfig extends RollupCommonJSOptions {
  dir?: string;
  format?: ModuleFormat;
  sourcemap: boolean;
  exports: "named" | "auto" | "default" | "none";
  preserveModules: boolean;
  preserveModulesRoot: string;
  entryFileNames: string;
}

const sharedConfig: ViteRollupConfig = {
  sourcemap: false,
  exports: "named",
  preserveModules: true,
  preserveModulesRoot: "src",
  entryFileNames: `[name].js`,
};

const cjsConfig: ViteRollupConfig = {
  dir: "dist/cjs",
  format: "cjs",
  ...sharedConfig,
};

const esmConfig: ViteRollupConfig = {
  dir: "dist/esm",
  format: "esm",
  ...sharedConfig,
};

const rollupConfig = [{ ...cjsConfig }, { ...esmConfig }];

const external = ["react", "react-dom"];

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "components",
    },
    rollupOptions: {
      output: rollupConfig,
      external,
    },
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outputDir: "dist/esm",
    }),
  ],
});

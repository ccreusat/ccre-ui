import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "components",
      // the proper extensions will be added
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
        },
      },
    },
  },
  resolve: {
    alias: [
      { find: "~", replacement: resolve(__dirname, "src") },
      {
        find: "utils",
        replacement: resolve(__dirname, "./src/utils"),
      },
      {
        find: "components",
        replacement: resolve(__dirname, "./src/components"),
      },
    ],
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outputDir: "dist",
    }),
  ],
});

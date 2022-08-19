import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "@ccreusat/ui",
      // the proper extensions will be added
      fileName: "main",
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
        find: "models",
        replacement: resolve(__dirname, "./src/models"),
      },
      {
        find: "components",
        replacement: resolve(__dirname, "./src/components"),
      },
      {
        find: "hooks",
        replacement: resolve(__dirname, "./src/hooks"),
      },
    ],
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
});

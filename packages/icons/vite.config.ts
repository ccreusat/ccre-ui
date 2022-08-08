import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "@knightkiddo-ui/icons",
      // the proper extensions will be added
      fileName: "knightkiddo-ui-icons",
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
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
});

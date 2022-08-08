import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";

import pkg from "./package.json";

export default [
  {
    input: ["./src/index.ts"],
    output: [
      {
        dir: "dist/cjs",
        format: "cjs",
        sourcemap: false,
        name: "components",
        exports: "named",
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.cjs.json",
      }),
      terser(),
    ],
  },
  {
    input: ["./src/index.ts"],
    output: [
      {
        dir: "dist",
        format: "esm",
        sourcemap: false,
        name: "components",
        exports: "named",
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      terser(),
    ],
  },
  {
    input: "dist/index.d.ts",
    output: [{ file: pkg.types, format: "esm" }],
    external: [pkg.peerDependencies],
    plugins: [dts()],
  },
];

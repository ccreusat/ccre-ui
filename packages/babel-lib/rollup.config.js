import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import pkg from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const babelHelpers = "runtime";
const babelOptions = {
  extensions,
  babelHelpers,
  include: ["src/**/*"],
  exclude: "**/node_modules/**",
};
const typeScriptOptions = { tsconfig: "./tsconfig.json" };

export default [
  {
    input: "src/index.ts",
    plugins: [
      external(),
      resolve(),
      commonjs(),
      babel(babelOptions),
      typescript(typeScriptOptions),
      terser(),
    ],
    output: [
      {
        file: pkg.main,
        format: "cjs",
        name: "BabelLib",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "esm",
        name: "BabelLib",
        sourcemap: true,
      },
    ],
  },
];

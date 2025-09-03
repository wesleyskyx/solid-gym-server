import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    rules: {
      "camelcase": "off",
      "no-useless-constructor": "off"
    },
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser }
  },
  ...(tseslint.configs.recommended as any),
  globalIgnores([
		"build/**/*",
    "node_modules/**/*",
    "eslint.config.mts",
    "yarn-error.log",
	])
]);

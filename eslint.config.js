import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import eslintPluginPrettier from "eslint-plugin-prettier"
import pluginReact from "eslint-plugin-react"
import pluginReactHooks from "eslint-plugin-react-hooks"
import { defineConfig } from "eslint/config"
import globals from "globals"

export default defineConfig([
  { ignores: ["dist/**", "node_modules/**", "vite.config.js"] },

  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    extends: [js.configs.recommended],
    languageOptions: { globals: globals.browser },
  },

  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "module" },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      // Prettier errors show up as ESLint errors
      "prettier/prettier": "error",
      "react/no-unused-prop-types": "warn",
    },
  },

  {
    files: ["**/*.{js,jsx}"],
    extends: [
      pluginReact.configs.flat.recommended,
      pluginReact.configs.flat["jsx-runtime"],
      pluginReactHooks.configs.flat.recommended,
    ],
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/purity": "warn",
    },
    settings: {
      react: { version: "detect" },
    },
  },
  eslintConfigPrettier,
])

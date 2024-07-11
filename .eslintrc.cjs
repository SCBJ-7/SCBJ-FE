module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:storybook/recommended"
  ],
  ignorePatterns: ["build", "dist", "public"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "import"],
  rules: {
    "import/prefer-default-export": "off",
    "import/extensions": ["off", "error", "ignorePackages"],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "index",
          "object",
          "type",
          "unknown",
        ],
        pathGroups: [
          {
            pattern: "next",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "react",
            group: "builtin",
          },
          {
            pattern: "@tanstack/**",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "@/libs/**",
            group: "unknown",
          },
          {
            pattern: "@/core/**",
            group: "unknown",
          },
          {
            pattern: "@/store/**",
            group: "unknown",
          },
          {
            pattern: "**/*.css.ts",
            group: "unknown",
            position: "after",
          },
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};

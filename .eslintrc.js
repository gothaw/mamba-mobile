module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    overrides: [
        // override "simple-import-sort" config
        {
            "files": ["*.js", "*.jsx", "*.ts", "*.tsx"],
            "rules": {
                "simple-import-sort/imports": [
                    "error",
                    {
                        "groups": [
                            // Packages `react` related packages come first.
                            ["^react", "^@?\\w"],
                            // Side effect imports.
                            ["^\\u0000"],
                            // Parent imports. Put `..` last.
                            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                            // Other relative imports. Put same-folder imports and `.` last.
                            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"]
                        ]
                    }
                ]
            }
        }
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "@typescript-eslint",
        "simple-import-sort"
    ],
    rules: {
        "@typescript-eslint/no-empty-interface": "off",
        "comma-dangle": ["error", "never"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "simple-import-sort/exports": "error",
        "simple-import-sort/imports": "error",
        "sort-keys": ["warn", "asc", {"caseSensitive": true, "natural": true}]
    }
};

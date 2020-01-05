module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: ["plugin:react/recommended", "airbnb"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["react", "prettier", "react-hooks"],
    rules: {
        rules: {
            "prettier/prettier": "error",
            "react/jsx-filename-extension": [
                "warn",
                { extensions: [".jsx", "js"] }
            ],
            "import/prefer-default-export": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn"
        }
    }
};

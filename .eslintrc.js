module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "react-app",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint/eslint-plugin",
        "react",
        "react-hooks",
        "prettier"
    ],
    "settings":{
        "react":{
            "version":"detect"
        }
    },
    "rules": {
        "no-anonymous-default-export":"off",
        "react/jsx-uses-react":2,
        "no-unused-vars":"off",
        "prettier/prettier":"off",
        "react/display-name":"off",
        "@typescript-eslint/no-explicit-any":"off",
        "no-console":process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger":process.env.NODE_ENV === "production" ? "error" : "off"
    }
}

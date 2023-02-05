module.exports = {
    preset: "jest-expo",
    transform: {
        "^.+\\.ts?$": "ts-jest",
        "^.+\\.(js|jsx)$": "babel-jest"
    },
    globals: {
        "__DEV__": true
    },
    transformIgnorePatterns: [
        "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|react-router-native)"
    ],
    collectCoverageFrom: ["./src/**/*.tsx", "./src/**/*.ts"],
    testEnvironment: "node",
    testRegex: "/.*\\.(test|spec)?\\.(ts|tsx)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    setupFilesAfterEnv: ["./testSetup.js", "@testing-library/jest-native/extend-expect"]
};
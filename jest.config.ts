import type { Config } from "jest"
const config: Config = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(ts|js)x?$": ["ts-jest",{tsconfig: 'tsconfig.json'}]
    },
    transformIgnorePatterns: [
        "<rootDir>/node_modules/"
    ],
    moduleFileExtensions: [
        "ts", "tsx", "js", "jsx", "json"
    ],
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/test/mock-up-assets.image.js',
        '\\.(css|sass|scss|less)$': 'identity-obj-proxy'
    }
}
export default config
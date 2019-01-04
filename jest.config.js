module.exports = {
    "setupFiles": [ "./src/test/client/setup.js" ],
    "verbose": true,
    "moduleFileExtensions": [
        "js",
        "json",
        "vue"
    ],
    "moduleNameMapper": {
        "^@/(.*)$": "<rootDir>/src/main/client/$1"
    },
    "transform": {
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
        ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
    },
    "snapshotSerializers": [
        "<rootDir>/node_modules/jest-serializer-vue"
    ],
    "transformIgnorePatterns": []
}
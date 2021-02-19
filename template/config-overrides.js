const { resolve } = require("path");
const { addWebpackAlias, override } = require("customize-cra");

module.exports = override(
    addWebpackAlias({
        "@": resolve(__dirname, "src"),
    }),
);

import { addWebpackAlias, override } from "customize-cra";
import { resolve } from "path";

module.exports = override(
    addWebpackAlias({
        "@/*": resolve(__dirname, "src"),
    }),
);

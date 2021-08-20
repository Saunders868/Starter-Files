const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, "./"),
            watch: true,
        },
        hot: true,
        open: true,
        port: 3000,
        client: {
            overlay: {
                warnings: true,
                errors: true,
            },
        },
    },
});

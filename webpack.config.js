const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        port: 9000,
        hot: true,
        liveReload: true
    },
    mode: "development"
};
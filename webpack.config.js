module.exports = {
    entry: `./index.js`,
    context: "D:/my-app/src",
    output: {
        path: "D:/my-app/dist",
        filename: "./assets/js/main.js",
        clean: {
            keep: /index.html/,
        }
    },
    devtool: "hidden-source-map",
    mode: "development",
};

//learn more https://zenn.dev/antez/articles/58307946cf4f3e
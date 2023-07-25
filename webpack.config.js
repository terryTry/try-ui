const glob = require("glob");

const list = {};

async function makeList(dirPath, list) {
    const files = glob.sync(`${dirPath}/**/index.js`);
    console.log(files);
    for (const file of files) {
        const component = file.split(/[/.]/)[2];
        console.log("component: ", component);
        list[component] = `./${file}`;
        console.log(list);
    }
}

makeList("components/lib", list);

const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    mode: 'development',
    entry: list,
    output: {
        path: path.resolve(__dirname, "lib"),
        filename: "[name].js",
        library: "tryui",
        libraryTarget: "umd",
    },
    plugins: [new VueLoaderPlugin()],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            }
        ],
    },
};

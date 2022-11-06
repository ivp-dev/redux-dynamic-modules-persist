const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (env, argv) => {
  let mode_env = argv.mode || "development";
  let isDev = mode_env === "development";

  const config = {
    mode: mode_env,
    entry: {
      main: "./src/index.ts",
    },

    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              plugins: ["@babel/plugin-transform-runtime"],
            },
          },
        },
      ],
    },

    output: {
      library: "redux-dynamic-modules-persist-core",
      libraryTarget: "umd",
      filename: isDev
        ? "redux-dynamic-modules-persist-core.js"
        : "redux-dynamic-modules-persist-core.min.js",
      path: __dirname + "/dist/",
      clean: true,
    },

    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      plugins: [
        new TsconfigPathsPlugin(),
      ],
    },

    externals: {
      "redux-persist": "redux-persist",
    },
    
    

    plugins: [new CleanWebpackPlugin()],
  };

  if (isDev) {
    config.devtool = "source-map";
  }

  return config;
};

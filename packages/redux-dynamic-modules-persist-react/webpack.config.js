module.exports = (env, argv) => {
  let mode_env = argv.mode || "development";
  let isDev = mode_env === "development";

  const config = {
    mode: mode_env,
    entry: {
      main: "./lib/index",
    },

    output: {
      library: "redux-dynamic-modules-persist-react",
      libraryTarget: "umd",
      filename: isDev
        ? "redux-dynamic-modules-persist-react.js"
        : "redux-dynamic-modules-persist-react.min.js",
      path: __dirname + "/dist/",
      clean: true,
    },

    externals: {
      react: "react",
      "redux-persist": "redux-persist",
    },
  };

  if (isDev) {
    config.devtool = "source-map";
  }

  return config;
};

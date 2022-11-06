module.exports = (env, argv) => {
  let mode_env = argv.mode || "development";
  let isDev = mode_env === "development";

  const config = {
    mode: mode_env,
    entry: {
      main: "./lib/index.js",
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

    externals: {
      "redux-persist": "redux-persist",
    },
  };

  if (isDev) {
    config.devtool = "source-map";
  }

  return config;
};

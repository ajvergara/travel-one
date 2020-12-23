const path = require("path");

const postCSSPlugins = [
    require("postcss-nested"),
    require("postcss-simple-vars"),
    require("autoprefixer")
];

module.exports = {
    mode: "development",
    entry: "./app/assets/scripts/App.js",
    output: {
        path: path.resolve(__dirname, "app"),
        filename: "bundled.js"
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
              "style-loader",
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  postcssOptions: {
                    plugins: [
                        require("postcss-nested"),
                        require("postcss-simple-vars"),
                        require("autoprefixer"),
                      [
                        "postcss-preset-env",
                       
                        {
                          // Options
                        },
                      ],
                    ],
                  },
                },
              },
            ],
          },
        ],
      },
    watch: true
};
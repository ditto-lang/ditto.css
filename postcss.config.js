module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-mixins"),
    require("autoprefixer"),
    require("cssnano")({
      preset: "default",
    }),
  ],
};

# ditto.css 💅

Something something visual identity.

## Usage

This isn't a stylesheet, it's a bunch of [PostCSS](https://postcss.org/) modules.
They're supposed to be extended and bundled on a case-by-case basis.
You'll need define your own postcss entrypoint and import `ditto.css` (using [`postcss-import`](https://github.com/postcss/postcss-import)):

```css
/* styles.css */
@import "ditto.css";

/* 
...any additions here 
*/
```

Copy this repo's [`postcss.config`](./postcss.config.js) if you want.

The styles also depend on [Fira Code](https://fonts.google.com/share?selection.family=Fira%20Code:wght@300;400)
and [Material Symbols](https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Adone%3AFILL%400%3Bwght%40600%3BGRAD%400%3Bopsz%4048),
which you'll need to include yourself.

# Markdown-it Wikilinks

> Markdown-it plugin to recognize Mediawiki links (`[[text]]`)

[![npm version badge](https://badgen.net/npm/v/@binyamin/markdown-it-wikilinks)](https://www.npmjs.com/package/@binyamin/markdown-it-wikilinks)

## Installing

```console
$ npm install --save markdown-it @binyamin/markdown-it-wikilinks
```


## Usage

```js
const markdownIt = require("markdown-it");
const markdownItWikilinks = require("@binyamin/markdown-it-wikilinks");

const md = new markdownIt({ linkify: true }).use(markdownItWikilinks, {
    base: "/notes/" // Determines the link url. Prepended directly to page slug
});
//...
```


## Maintenance

This is just a personal project, so I don't expect contributions. That said, I'm open to all suggestions.


## Legal
All source-code is provided under the terms of [the MIT license](https://github.com/binyamin/markdown-it-wikilinks/tree/main/LICENSE). Copyright 2020-2022 Binyamin Green.

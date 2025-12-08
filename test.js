import test from "ava";
import markdownIt from "markdown-it";
import markdownItWikilinks from "./index.js";

test.before(t => {
    t.context.md = new markdownIt({ linkify: true }).use(markdownItWikilinks, {
        base: "/notes/"
    });
})

test('works with emoji', (t) => {
    let res = t.context.md.renderInline("[[📦]]");
    // Note: markdown-it url-encodes emoji symbols
    t.assert(res === `<a href="/notes/%F0%9F%93%A6">📦</a>`, res)
})

test('works with just note name', (t) => {
    let res = t.context.md.renderInline("[[name]]");
    t.assert(res === `<a href="/notes/name">name</a>`)
})

test('works also with custom text', (t) => {
    let res = t.context.md.renderInline("[[name|text 📦]]")
    t.assert(res === `<a href="/notes/name">text 📦</a>`)
})

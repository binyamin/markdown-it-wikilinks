import assert from 'node:assert/strict';
import test from 'node:test';
import markdownIt from 'markdown-it';
import markdownItWikilinks from './index.js';

const md = new markdownIt({ linkify: true });
md.use(markdownItWikilinks, {
	base: '/notes/',
});

test('works with emoji', () => {
	const res = md.renderInline('[[📦]]');
	// Note: markdown-it url-encodes emoji symbols
	assert.equal(res, `<a href="/notes/%F0%9F%93%A6">📦</a>`, res);
});

test('works with just note name', () => {
	const res = md.renderInline('[[name]]');
	assert.equal(res, `<a href="/notes/name">name</a>`);
});

test('works also with custom text', () => {
	const res = md.renderInline('[[name|text 📦]]');
	assert.equal(res, `<a href="/notes/name">text 📦</a>`);
});

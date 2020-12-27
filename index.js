const regex = /\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu;

module.exports = (md) => {
	// Recognize Mediawiki links ([[text]])
	md.linkify.add("[[", {
		validate: /^([\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F\w\s/-]+)(md|markdown)?\s?(\|\s?(.+))?\]\]/u,
		normalize: (match) => {
			const parts = match.raw.slice(2, -2).split("|");
			parts[0] = parts[0].replace(/.(md|markdown)\s?$/i, "");
			match.text = (parts[1] || parts[0]).trim();
			match.url = `/notes/${parts[0].trim()}/`;
		},
	});
};

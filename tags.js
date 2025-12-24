fetch("/tags.json")
	.then((res) => res.json())
	.then((tagColors) => {
		document.querySelectorAll(".chip.tag[data-tag]").forEach((el) => {
			const key = el.dataset.tag.toLowerCase();
			if (tagColors[key]) {
				el.style.setProperty("--tag-color", tagColors[key]);
			}
		});
	});

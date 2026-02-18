type Theme = "light" | "dark";

export function initTheme() {
	const root = document.documentElement;
	const theme = localStorage.getItem("theme");
	const result = theme === "dark" || theme === "light";
	if (result) {
		root.dataset.theme = theme;
	}
}

export function setTheme(theme: Theme) {
	const root = document.documentElement;
	root.dataset.theme = theme;
	localStorage.setItem("theme", theme);
	console.log(theme);
}

var screen = document.getElementById('screen');
var navbar = document.createElement('section');
var meta_template = document.createElement('template');

function knowMore() {
	screen.classList.add('moved');
	setTimeout(() => {
		window.location.href = '/info';
	}, 1000);

	setTimeout(() => {
		screen.classList.remove('moved');
	}, 1500);
}

function injectReusables() {
	navbar.id = "navbar";
	fetch('/assets/reusable/navbar.html')
		.then((response) => response.text())
		.then((html) => {
			navbar.innerHTML = html;
			document.body.prepend(navbar);
		});
}
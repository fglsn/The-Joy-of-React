//Create your own render function 

function render(reactElement, containerDOMElement) {
	const elem = document.createElement(reactElement.type);

	elem.innerText = reactElement.children;

	for (const key in reactElement.props) {
		const value = reactElement.props[key];
		elem.setAttribute(key, value);
	}

	containerDOMElement.appendChild(elem);
}

const reactElement = {
	type: 'a',
	props: {
		href: 'https://wikipedia.org/',
	},
	children: 'Read more on Wikipedia',
};

const containerDOMElement =
	document.querySelector('#root');

render(reactElement, containerDOMElement);
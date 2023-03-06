import { createRoot } from 'react-dom/client';

const Button = ({ color, children }) => {
	return (
		<button
			style={{
				border: '2px solid',
				color,
				borderColor: color,
				background: 'white',
				borderRadius: 4,
				padding: 16,
				margin: 8,
			}}
		>
			{children}
		</button>
	);
}
const root = createRoot(
	document.querySelector('#root')
);

root.render(
	<div>
		<Button color='red'>Text</Button>
		<Button color='green'>Confirm</Button>
	</div>
);


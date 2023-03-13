import React from "react";

function App() {
	const [colors, setColors] = React.useState([
		"#FFD500",
		"#FF0040",
		"#FF0040",
		"#FF0040",
		"#FF0040",
	]);

	const [colorsCount, setColorsCount] = React.useState(2);
	const visibleColors = colors.slice(0, colorsCount);

	const colorStops = visibleColors.join(", ");
	const backgroundImage = `linear-gradient(${colorStops})`;

	const handleAddColor = (event) => {
		if (colorsCount >= 5) {
			window.alert("There is a maximum of 5 colors");
			return;
		}
		setColorsCount(colorsCount + 1);
	};

	const handleRemoveColor = (event) => {
		if (colorsCount <= 2) {
			window.alert("There is a minimum of 2 colors");
			return;
		}
		setColorsCount(colorsCount - 1);
	};

	return (
		<div className="wrapper">
		<div className="actions">
			<button onClick={handleRemoveColor}>Remove color</button>
			<button onClick={handleAddColor}>Add color</button>
		</div>
		<div
			className="gradient-preview"
			style={{
			backgroundImage,
			}}
		/>

		<div className="colors">
			{visibleColors.map((color, index) => {
				const colorId = `color-${index}`;
				return (
					<div key={colorId} className="color-wrapper">
					<label htmlFor={colorId}>Color {index + 1}:</label>
					<div className="input-wrapper">
						<input
							id={colorId}
							type="color"
							value={color}
							onChange={(event) => {
								const nextColors = [...colors];
								nextColors[index] = event.target.value;
								setColors(nextColors);
							}}
						/>
					</div>
					</div>
				);
			})}
		</div>
		</div>
	);
}

export default App;

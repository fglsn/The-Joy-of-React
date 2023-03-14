import React from 'react';

const getLetterStatus = (guesses) => {
	const statuses = {};

	guesses.forEach((guess) => {
		guess.forEach(({ letter, status }) => {
			statuses[letter] = status;
		});
	});

	return statuses;
};

const Keyboard = ({ guesses }) => {
	const rows = [
		['Q', 'W', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
		['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
		['Z', 'X', 'C', 'V', 'B', 'N', 'M']
	];
	const letterStatuses = getLetterStatus(guesses);
	//console.log(letterStatuses);

	return (
		<>
			{rows.map((row, index) => (
				<div className="keyboard-row" key={index}>
					{row.map((key) => {
						return (
							<p
								key={key}
								className={`key ${letterStatuses[key] || ''}`}
							>
								{key}
							</p>
						);
					})}
				</div>
			))}
		</>
	);
};

export default Keyboard;

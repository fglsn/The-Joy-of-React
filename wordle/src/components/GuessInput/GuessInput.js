import { useState } from 'react';

const GuessInput = ({ addNewGuess, gameStatus }) => {
	const [guessInput, setGuessInput] = useState('');

	const handleChange = (e) => {
		setGuessInput(e.target.value.toUpperCase());
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addNewGuess(guessInput);
		setGuessInput('');
	};

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				required
				disabled={gameStatus}
				id="guess-input"
				value={guessInput}
				onChange={handleChange}
				minLength={5}
				maxLength={5}
				title="5 letter word"
				pattern="[A-Za-z]{5}"
			/>
		</form>
	);
};

export default GuessInput;

import { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';

import GuessInput from '../GuessInput';
import Guesses from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = useState([]);

	const addNewGuess = (guess) => {
		setGuesses([...guesses, checkGuess(guess, answer)]);
	}

	return (
		<>
			<Guesses guesses={guesses} />
			<GuessInput addNewGuess={addNewGuess} />
		</>
	);
}

export default Game;

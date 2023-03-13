import { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';

import GuessInput from '../GuessInput';
import Guesses from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = useState([]);
	const [gameStatus, setGameStatus] = useState(undefined);

	const updateGameStatus = (guess) => {
		if (guess && !guess.find(elem => elem.status === 'incorrect') && !guess.find(elem => elem.status === 'misplaced')) {
			setGameStatus('pos');
		}
		else if (guess && guesses.length >= NUM_OF_GUESSES_ALLOWED - 1) {
			setGameStatus('neg');
		}
	}

	const addNewGuess = (guess) => {
		const checkedGuess = checkGuess(guess, answer)
		setGuesses([...guesses, checkedGuess]);
		updateGameStatus(checkedGuess);
	}

	return (
		<>
			<Guesses guesses={guesses} />
			<GuessInput addNewGuess={addNewGuess} gameStatus={gameStatus} guessCount={guesses.length}/>
		</>
	);
}

export default Game;

import { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';

import GuessInput from '../GuessInput';
import Guesses from '../GuessResults';
import WinningBanner from '../WinningBanner';
import LosingBanner from '../LosingBanner';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = useState([]);
	const [gameStatus, setGameStatus] = useState(undefined);

	const addNewGuess = (guess) => {
		const nextGuesses = [...guesses, checkGuess(guess, answer)];
		setGuesses(nextGuesses);
		if (guess === answer) {
			setGameStatus('pos');
		} else if (guess && nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus('neg');
		}
	};

	return (
		<>
			<Guesses guesses={guesses} />
			<GuessInput addNewGuess={addNewGuess} gameStatus={gameStatus} />
			{gameStatus === 'pos' && (
				<WinningBanner guessCount={guesses.length} />
			)}
			{gameStatus === 'neg' && <LosingBanner answer={answer} />}
		</>
	);
}

export default Game;

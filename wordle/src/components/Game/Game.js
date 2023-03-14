import { useState } from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import { WORDS } from '../../data';

import Keyboard from '../Keyboard';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import LosingBanner from '../LosingBanner';
import WinningBanner from '../WinningBanner';

const answer = sample(WORDS);
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = useState([]);
	const [gameStatus, setGameStatus] = useState(undefined);

	const addNewGuess = (guess) => {
		const nextGuesses = [...guesses, checkGuess(guess, answer)];
		setGuesses(nextGuesses);
		if (guess === answer) {
			setGameStatus('pos');
		} else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus('neg');
		}
	};

	return (
		<>
			<GuessResults guesses={guesses} />
			<GuessInput addNewGuess={addNewGuess} gameStatus={gameStatus} />
			{gameStatus === 'pos' && (
				<WinningBanner guessCount={guesses.length} />
			)}
			{gameStatus === 'neg' && <LosingBanner answer={answer} />}
			{gameStatus === undefined && <Keyboard guesses={guesses} />}
		</>
	);
}

export default Game;

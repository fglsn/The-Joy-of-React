import React from "react";

function Banner({ gameStatus, guessCount }) {
	return (
		gameStatus === 'pos'
			? (
				<div className="happy banner">
					<p>
						<strong>Congratulations!</strong> Got it in {' '}
						<strong>{guessCount} guesses</strong>.
					</p>
				</div>
			) : (
				<div className="sad banner">
					<p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
				</div>
			)
	)
}

export default Banner;

import React from "react";

function Guesses({ guesses }) {
	return (
		<div className="guess-results">
			{guesses.map((guess, i) => <p key={i} className="guess">{guess}</p>)}
		</div>
	);
}

export default Guesses;

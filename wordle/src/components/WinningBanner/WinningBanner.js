import React from 'react';
import Banner from '../Banner';

function WinningBanner({ guessCount }) {
	return (
		<Banner status="happy">
			<p>
				<strong>Congratulations!</strong> Got it in{' '}
				<strong>{guessCount} guesses</strong>.
			</p>
		</Banner>
	);
}

export default WinningBanner;

import React from 'react';

function Banner({ status, children }) {
	return (
		<div className={`${status} banner`}>
			{children}
			<button onClick={() => window.location.reload()}>Restart</button>
		</div>
	);
}

export default Banner;

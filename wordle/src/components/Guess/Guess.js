import React from "react";
import { range } from '../../utils';

const Cell = ({ letter, status }) => {
	const className = status ? `cell ${status}` : 'cell';

	return <span className={className}>{letter}</span>;
}

const Guess = ({ guess }) => {
	return (
		<p className="guess">
			{range(5).map((index) => (
				<Cell
					key={index}
					letter={guess ? guess[index]['letter'] : undefined}
					status={guess ? guess[index]['status'] : ''}
				/>
			))}
		</p>
	);
};

export default Guess;

//custom clamp function to guarantee a number from 1 to 100, not 0


{/* 
<button
	onClick={() => {
		const nextCount = clamp(
			Math.ceil(
				Math.random() * 100
			),
			1,
			100
		);
		setCount(nextCount);
	}}
>
</button> */}

const clamp = (val, min = 0, max = 1) => {
	if (min > max) {
		[min, max] = [max, min];
	}
	return Math.max(min, Math.min(max, val));
};

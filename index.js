function knightMoves(startPosition = [0, 0], endPosition = [0, 0]) {
	// Check if start and end positions are within the range
	if (
		startPosition[0] < 0 ||
		startPosition[0] >= 8 ||
		startPosition[1] < 0 ||
		startPosition[1] >= 8 ||
		endPosition[0] < 0 ||
		endPosition[0] >= 8 ||
		endPosition[1] < 0 ||
		endPosition[1] >= 8
	) {
		return Error("out of range");
	}

	// Check if start and end positions are the same
	if (
		startPosition[0] === endPosition[0] &&
		startPosition[1] === endPosition[1]
	) {
		return [endPosition];
	}

	// Initialize a queue for BFS
	const queue = [{ position: startPosition, path: [startPosition] }];

	// Define possible knight moves
	const moves = [
		[-2, -1],
		[-2, 1],
		[-1, -2],
		[-1, 2],
		[1, -2],
		[1, 2],
		[2, -1],
		[2, 1],
	];

	// Perform BFS
	while (queue.length > 0) {
		const { position, path } = queue.shift();
		const [x, y] = position;

		// Check if current position is the end position
		if (x === endPosition[0] && y === endPosition[1]) {
			return path;
		}

		// Explore all possible knight moves from the current position
		for (const move of moves) {
			const newX = x + move[0];
			const newY = y + move[1];

			// Check if new position is within the board and not visited yet
			if (
				newX >= 0 &&
				newX < 8 &&
				newY >= 0 &&
				newY < 8 &&
				!path.some((p) => p[0] === newX && p[1] === newY)
			) {
				queue.push({ position: [newX, newY], path: [...path, [newX, newY]] });
			}
		}
	}

	// If no path is found, return null
	return null;
}

console.log(knightMoves([0, 0], [7, 7]));

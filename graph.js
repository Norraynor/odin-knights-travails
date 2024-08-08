function createNode(x, y) {
	let position = { x: x, y: y };
	let neighbors = {
		left: null,
		right: null,
		up: null,
		down: null,
	};
	return { position, neighbors };
}
function createGraph(size) {
	// Create 2D array to represent the graph
	// Each cell in the array represents a node with neighbors to the left, right, up, and down
	// Initialize all neighbors to null for each node
	let empty2DArray = createGraphArray(size);
	let graph = populateGraphArray(empty2DArray);
	return graph;
}

function createGraphArray(size) {
	let graphArray = Array(size)
		.fill(0)
		.map((x) => Array(size).fill(0));
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			const node = createNode(i, j);
			graphArray[i][j] = node;
		}
	}
	return graphArray;
}
function populateGraphArray(arr) {
	arr.forEach((element) => {
		element.forEach((cell) => {
			let i = cell.position.x;
			let j = cell.position.y;
			if (j > 0 && j < arr.length) {
				cell.neighbors.left = arr[i][j - 1];
				arr[i][j - 1].neighbors.right = cell;
			}
			if (i > 0 && i < arr.length) {
				cell.neighbors.up = arr[i - 1][j];
				arr[i - 1][j].neighbors.down = cell;
			}
		});
	});
	return arr;
}
// console.log(createGraph(4));
const board = createGraph(8);

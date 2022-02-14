class TrieNode {

	constructor() {
		this.children = new Map();
		this.is_word = false;
	}

	add_word(word) {
		let current = this;
		for (let char of word) {
			if (!current.children.has(char)) {
				current.children.set(char, new TrieNode())
			}
			current = current.children.get(char);
		}
		current.is_word = true;
	}

}

/**
	* @function find_words
	* @description Given a matrix and a list of words, return all words in the given matrix
	* @param {character[][]} board - Character board
	* @param {string[]} words - words we want to search for
	* @return {string[]} words that we can find, or an empty array
	*/
function find_words(board, words) {

	// Create a root trie node, and then add all our words to it
	let root = new TrieNode();
	words.forEach(word => root.add_word(word));

	// Create a set for our results to prevent duplicates
	let results = new Set();
	let visited = new Set();
	let rows = board.length;
	let cols = board[0].length;

	// Create a dfs function and traverse through it
	function dfs(row, col, node, word = "") {
		let key = `${row}-${col}`;
		// If we are out of bounds, or the node cannot move to a character we are interested in, return
		if (row < 0 || col < 0 || row === rows || col === cols || !node.children.has(board[row][col]) || visited.has(key)) {
			return;
		}

		// Add this node to visited
		visited.add(key);

		// Get the next node that contains the current character and build up our word
		node = node.children.get(board[row][col]);
		word += board[row][col];

		// If we are at the end of the word, add it to our results set
		if (node.is_word) {
			results.add(word);
		}

		// Move in all valid directions
		dfs(row + 1, col, node, word);
		dfs(row - 1, col, node, word);
		dfs(row, col + 1, node, word);
		dfs(row, col - 1, node, word);

		// Since we may neef to visit this key again in a separate dfs, rewmove the key
		visited.delete(key);
	}

	// Run our dfs from each node int he matrix
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			dfs(i, j, root);
		}
	}

	return Array.from(results);
}

module.exports = find_words;

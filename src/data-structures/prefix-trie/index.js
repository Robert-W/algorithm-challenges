/**
 * @Class PrefixTrie
 * @description A Prefix trie with the ability to add/remove words for
 * optimizations on certain problems
 */
module.exports = class PrefixTrie {
	constructor() {
		this.children = {};
	}

	/**
	 * @function get
	 * @description Convenience accessor for children
	 * @param {string} key - letter to get child for
	 * @returns {PrefixTrie|undefined}
	 */
	get(key) {
		return this.children[key];
	}

	/**
	 * @function add_word
	 * @description Called from the root, adds a word to the trie
	 * @param {string} word - Word to add to the trie
	 * @returns void
	 */
	add_word(word) {
		let current = this;
		for (const letter of word) {
			if (current.children[letter] === undefined)
				current.children[letter] = new PrefixTrie();

			current = current.children[letter];
		}
		current.word = word;
	}

	/**
	 * @function remove_word
	 * @description Called from the root, removes a word from the trie
	 * @param {string} word - Word to remove from the trie
	 * @returns void
	 */
	remove_word(word) {
		let current = this;
		let stack = [];

		// Traverse to the end
		for (const letter of word) {
			// Can't remove a word that is not in the trie
			if (current.children[letter] === undefined) return;

			stack.push(current);
			current = current.children[letter];
		}

		// Delete our marker
		delete current.word

		// Special case: If this node has children, we can't delete any nodes
		// from the trie because this means this is a prefix for a longer word
		if (Object.keys(current.children).length > 0) return;

		// Iterate over the stack backwards, and get the letter at the same
		// position, this way we can delete the approriate child. This covers cases
		// where there are multiple children
		let child;
		let letter;
		for (let i = stack.length - 1; i >= 0; i--) {
			letter = word.charAt(i);
			current = stack[i];
			child = current.children[letter];

			// If the child node has no children of it's own, it is safe to delete
			// this child node
			if (Object.keys(child.children).length === 0)
				delete current.children[letter];
		}
	}
}

# Word Search
> https://leetcode.com/problems/word-search-ii/

## Constraints
* `m == board.length`
* `n == board[i].length`
* `1 <= m, n <= 12`
* `board[i][j] is a lowercase English letter.`
* `1 <= words.length <= 3 * 104`
* `1 <= words[i].length <= 10`
* `~words[i] consists of lowercase English letters.`
* `All the strings of words are unique.`

## Example
* Input: board = `[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]`, words = `["oath","pea","eat","rain"]`
* Output: `["eat", "oath"]` 
* Explanation: Each of the returned words can be constructed by moving horizontally or vertically inside the matrix.

## Function Signature
`find_words(board: character[][], words: string[]) -> string[]`

## About
There are options to brute force it. For each word, go through the matrix and everytime you find a word starting with the appropriate letter, traverse it and see if you can spell the current word you are on using a DFS. This is not very efficient as you have to repeat traversals for any words starting with the same letter. Another option is to use a trie. You can construct a prefix tree based on each word in the words list. Then, make one pass through the matrix, and use the prefix tree to help guide the DFS. This can stop any traversal that is not in the tree and detect multiple words that share a prefix. 

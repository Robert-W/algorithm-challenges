/**
  * @function traverse
  * @description Mark this cell as visited or not and move to the next one
  * @param {number} row
  * @param {number} col
  * @param {number[][]} matrix
  */
function traverse(row: number, col: number, matrix: number[][]) {
  matrix[row][col] = 2;

  // Move right
  if (col + 1 < matrix[row].length && matrix[row][col + 1] === 1)
    traverse(row, col + 1, matrix);

  // Move left
  if (col - 1 >= 0 && matrix[row][col - 1] === 1)
    traverse(row, col - 1, matrix);

  // Move up
  if (row - 1 >= 0 && matrix[row - 1][col] === 1)
    traverse(row - 1, col, matrix);

  // Move down
  if (row + 1 < matrix.length && matrix[row + 1][col] === 1)
    traverse(row + 1, col, matrix);
}


/**
  * @function is_borderland
  * @description Is this cell a border cell and has a value of 1
  * @param {number} row
  * @param {number} col
  * @param {number[][]} matrix
  * @return {boolean}
  */
function is_borderland(row: number, col: number, matrix: number[][]): boolean {
  return matrix[row][col] === 1 && (
    row === 0
    || col === 0
    || row === matrix.length - 1
    || col === matrix[row].length - 1
  );
}

/**
  * @function remove_islands
  * @description Given a matrix of 1's and 0's, remove all
  * @param {number[][]} matrix
  * @return {number[][]}
  */
function remove_islands(matrix: number[][]): number[][] {
  // First pass, initiate a traversal from every border section with a value of 1
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (is_borderland(i, j, matrix))
        traverse(i, j, matrix);
    }
  }

  // Second pass, reverse all of our markings and mark remaining 1's as 0's
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) matrix[i][j] = 0;
      if (matrix[i][j] === 2) matrix[i][j] = 1;
    }
  }

  return matrix;
}

export default remove_islands;

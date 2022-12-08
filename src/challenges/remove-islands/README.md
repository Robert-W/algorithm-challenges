# Remove Islands
> See description and problem being solved at https://www.youtube.com/watch?v=4tYoVx0QoN0 

## Example
* Input: matrix = [[0, 0, 1], [0, 1, 0], [1, 0, 1]]
* Output: [[0, 0, 1], [0, 0, 0], [1, 0, 1]]
* Explanation: The middle row, 0, 1, 0, has one island. We change it to 0 
because there are no islands connected up, down, left, or right. Diagonals do 
not count.

## Function Signature
remove_islands(matrix: number[][]) -> number[][]

## About
The concept is the matrix provided is a graph. We want to do a DFS or BFS and 
find all "islands", that is 1's that are not connected to any kind of edges, 
and remove them. We can do this by making two passes. First is any 1 we 
encounter on a border, we trace its route inwards and change all values to a 
2, marking them visited. On the second pass, we change all remaining 1's to 
0's and then change all 2's back to 1's.

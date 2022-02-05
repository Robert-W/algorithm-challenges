# Course Schedule
> See problem description on LeetCode at https://leetcode.com/problems/course-schedule/

## Constraints
* 1 <= numCourses <= 105
* 0 <= prerequisites.length <= 5000
* prerequisites[i].length == 2
* 0 <= ai, bi < numCourses
* All the pairs prerequisites[i] are unique.

## Example
* Input: numCourses = 3, prerequisites = [[0, 1], [0, 2], [1, 2]]
* Output: true
* Explanation: There are no cycles, meaning, each course can be taken because its prerequisite can be taken.

## Function Signature
can_finish(numCourses: number, prerequisites: number[][]) -> boolean

## About
This solution ended up using a version of Khan's topological sort algorithm. This algorithm is good at detecting cycles in a graph like structure efficiently. The time complexity is O(V + E) while the space complexity is O(V).

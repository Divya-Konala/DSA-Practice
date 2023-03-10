## 363. Max Sum of Rectangle No Larger Than K (LeetCode)
## URL: https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/description/

Given an m x n matrix matrix and an integer k, return the max sum of a rectangle in the matrix such that its sum is no larger than k.

It is guaranteed that there will be a rectangle with a sum no larger than k.

 <img src="https://assets.leetcode.com/uploads/2021/03/18/sum-grid.jpg" alt="exampleMatrix">
 
 https://assets.leetcode.com/uploads/2021/03/18/sum-grid.jpg

Example 1:


Input: matrix = [[1,0,1],[0,-2,3]], k = 2
Output: 2
Explanation: Because the sum of the blue rectangle [[0, 1], [-2, 3]] is 2, and 2 is the max number no larger than k (k = 2).
Example 2:

Input: matrix = [[2,2,-1]], k = 3
Output: 3
 

Constraints:
<ul>
<li>m == matrix.length</li>
<li>n == matrix[i].length</li>
<li>1 <= m, n <= 100</li>
<li>-100 <= matrix[i][j] <= 100</li>
<li>-105 <= k <= 105</li>
</ul>
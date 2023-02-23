## Check if two arrays are equal or not
## URL: https://www.geeksforgeeks.org/check-if-two-arrays-are-equal-or-not/

Given two arrays, arr1 and arr2 of equal length N, the task is to find if the given arrays are equal or not. 

Two arrays are said to be equal if:

both of them contain the same set of elements, 
arrangements (or permutations) of elements might/might not be same.
If there are repetitions, then counts of repeated elements must also be the same for two arrays to be equal.
Examples: 

Input: arr1[] = {1, 2, 5, 4, 0}, arr2[] = {2, 4, 5, 0, 1}
Output: Yes

Input: arr1[] = {1, 2, 5, 4, 0, 2, 1}, arr2[] = {2, 4, 5, 0, 1, 1, 2} 
Output: Yes

 Input: arr1[] = {1, 7, 1}, arr2[] = {7, 7, 1}
Output: No
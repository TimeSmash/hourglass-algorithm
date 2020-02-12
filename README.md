# hourglass-algorithm
Algorithm to get hourglasses from grid-array and find one their sums

This algorithm was created to solve the problem posed by HackerRank, as seen here: https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

tl,dr; Given an array grid, retrieve the hourglasses from it, and gather their sums.

For example, given a 5x5 grid like the one below:
```
1 2 3 4 5 
5 4 3 2 1
6 7 8 9 0
0 9 8 7 6
4 5 6 7 8
```
The following hourglasses can be obtained:
```
1 2 3  2 3 4  3 4 5
  4      3      2
6 7 8  7 8 9  8 9 0

5 4 3  4 3 2  3 2 1 
  7      8      9
0 9 8  9 8 7  8 7 6

6 7 8  7 8 9  8 9 0
  9      8      7
4 5 6  5 6 7  6 7 8
```
The hard part here is getting the hourglasses themselves. Through array manipulation methods, however, we can create new arrays containing
the numbers that compose the hourglass. We can then sum those numbers and sort them to deduce the highest sum achievable from all hourglasses present
in the grid.

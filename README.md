[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12146684&assignment_repo_type=AssignmentRepo)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered".

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

- Worst Case : reverse sorted list, or min element at end of array
- Best Case : sorted list, or min element at beginning of array
- my code creates n! permutations no matter the case (i.e. O(n!)). We then has to run through each permutation and check if it is sorted (i.e. O(n!)). If it is sorted, we then have to set the sorted permutation equal to the initial array (i.e. O(n)). This leaves us with a best case compleixty of O(n * n!) which can simplify to O(n). We can note that in the best, case the sorted permutaion will be found much faster than if it was a the end of the list, our worse case. However due to my implementation where we have to return n! permutations no matter the input, the time complexity does not change between or best and worst cases 

- Random Case : Generating permuations randomly would be horrible. Even though our current implementation is not great (i.e. I could make this so that, when the sorted permutation is found, we return the number of permutations generated at that step, and we set the input array to the sorted array), we at least know that we wont generate the same permutation twice, so no matter what the input is we know we will create n! permutations. However if we generated permutations randomly, we might generate the same permutation twice, or many many times. In theory, it could take much more than n! permutation generations to find the sorted permutation. In fact the chance that we will randomly generate the sorted permutation at any time in the code would be $((1/n!) \cdot 100)$%. So if we generate permutations randomly, the time complexity is unknown, however it COULD be MUCH WORSE than O(n!). 

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.



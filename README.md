# Big Oh Notation & Algorithm Complexity

## External Resources

- [FreeCodeCamp Article](https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/)
- [Time Complexity Charts](https://www.hackerearth.com/practice/notes/big-o-cheatsheet-series-data-structures-and-algorithms-with-thier-complexities-1/)

## Definition

- Big Oh is a way to categorize your algorithm's **time** or **memory**
  requirements based on **input**.
- It is not meant to be an exact measurement. Instead it is meant to
  **generalize the growth of your algorithm**.
- Big Oh, said differently: As your input grows, how fast does computation or
  memory grow?
- It is usually the upper bound of this measurement (e.g. worst case scenario).

So, for example, when someone says Oh of N, they mean your algorithm will grow
linearly based on input.

## Why do we use Big Oh

Often it will help us make decisions about what data structures and algorithms
to use.\
Knowing how they will perform can greatly help create the best possible program
out there.

## Example 1

Consider the code in `example-1.js`

How does this program grow with respect to input?

The argument `str` is a string, so it has a length and a series of characters
associated with it.\
If we look at the for-loop, we can see that the loop has to
execute the length of the string.

So if our string grows by 50%, then how much slower is our function?\
Simple - it's 50% slower.

This is linear growth. For every one more unit of string, there is one more loop
that it has to do.

### Simple Trick For Complexity

Look for loops.

## Example 2

Consider the code in `example-2.js`

If the previous example was O(N), what's this?

### Constants are dropped

O(2N) -> O(N) and this makes sense.

That is because Big O is meant to describe the upper bound of the algorithm (the
**growth** of the algorithm).

The constant eventually becomes irrelevant.

### Why Constants Are Dropped

Consider the following:

| N      | O(10N)  | O(N²)       |
| ------ | ------- | ----------- |
| 1      | 10      | 1           |
| 5      | 50      | 25          |
| 100    | 1000    | 10,000      |
| 1000   | 10,000  | 1,000,000   |
| 10,000 | 100,000 | 100,000,000 |

Shown above, as N grows larger, the constant 10 in 10N can't keep pace with the
growth of N².

Practically speaking, constants are important. Theoretically speaking, they're
not so important.

Do keep in mind though that just because N is faster than N², that doesn't
mean practically that it is always faster for small input.

## Example 3 - Worst Case

Consider the code in `example3.js`.

In Big Oh we consider the best, average, and worst cases. However, the most
important is the **worst case**, which is also the most frequently asked about
in interviews.

In this example, we terminate the loop early if we encounter the character 'A'.

This function is still O(N), the worst case being that we do not terminate the
loop early and interate over all N of the string characters.

## Example 4 - O(N²)

Consider the code in `example-4.js`.

The nested loop gives away the O(N²) runtime. We are doing N operations, N
times, which results in N \* N = N².

A visual representation of this is to think of counting the area of a square one
unit at a time.

## Example 5 - O(N³)

Consider the code in `example-5.js`.

More nested loops means more time complexity. This example has three nested
loops, which results in a time complexity of O(N³).

Think of the volume of a cube or matrix multiplication.

## O (N log N)

Go over N characters, but on the next iteration you only need to go over half
of N.

### Logarithms Review

Math 😱

Logarithms are mathematical functions that represent the relationship between
the **exponent** and the **base** of a **power**.

In simpler terms, a logarithm tells you **how many times you need to multiply**
**a specific base to get a given number**.

The most common type of logarithm is the base-10 logarithm, often written as
log₁₀, but in the context of programming, the most common base is log₂.

The general form of a logarithm is represented as follows:

$log_b(x) = y$

Here, 'x' is the number you want to find the logarithm of, 'b' is the base of
the logarithm, and 'y' is the exponent to which the base 'b' must be raised to
get 'x'.

For example, in base-10 logarithm:

log₁₀(100) = 2

This means that 10 raised to the power of 2 (10²) equals 100.

### Why Base-2

Binary Representation: Computers store and process information using bits, which
can represent two values: 0 and 1. This binary nature is at the core of computer
architecture.

When you take the logarithm base-2 of a number, you're essentially finding out
how many times you can divide that number by 2 before reaching a value of 1.

Logarithms base-2 are prevalent in programming because they align well with the
binary nature of computers, binary data structures, search operations, memory
addressing, and the foundational principles of information theory.

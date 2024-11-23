"use client";

import React from "react";

const problemsData = [
  {
    topic: "Sorting Algorithms",
    levels: {
      basic: [
        {
          title: "Bubble Sort",
          url: "https://leetcode.com/problems/sort-an-array/",
        },
        {
          title: "Selection Sort",
          url: "https://leetcode.com/problems/sort-an-array/",
        },
        {
          title: "Insertion Sort",
          url: "https://leetcode.com/problems/sort-an-array/",
        },
        {
          title: "Merge Sort",
          url: "https://leetcode.com/problems/sort-an-array/",
        },
        {
          title: "Quick Sort",
          url: "https://leetcode.com/problems/sort-an-array/",
        },
        {
          title: "Heap Sort",
          url: "https://leetcode.com/problems/sort-an-array/",
        },
        {
          title: "Counting Sort",
          url: "https://leetcode.com/problems/sort-an-array/",
        },
        {
          title: "Radix Sort",
          url: "https://leetcode.com/problems/sort-an-array/",
        },
        {
          title: "Bucket Sort",
          url: "https://leetcode.com/problems/sort-an-array/",
        },
        {
          title: "Shell Sort",
          url: "https://leetcode.com/problems/sort-an-array/",
        },
      ],
      medium: [
        {
          title: "Sort Colors",
          url: "https://leetcode.com/problems/sort-colors/",
        },
        {
          title: "Wiggle Sort II",
          url: "https://leetcode.com/problems/wiggle-sort-ii/",
        },
        {
          title: "Largest Number",
          url: "https://leetcode.com/problems/largest-number/",
        },
        {
          title: "Meeting Rooms II",
          url: "https://leetcode.com/problems/meeting-rooms-ii/",
        },
        {
          title: "Merge Intervals",
          url: "https://leetcode.com/problems/merge-intervals/",
        },
        {
          title: "Sort Characters By Frequency",
          url: "https://leetcode.com/problems/sort-characters-by-frequency/",
        },
        {
          title: "Kth Largest Element in an Array",
          url: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
        },
        {
          title: "Top K Frequent Elements",
          url: "https://leetcode.com/problems/top-k-frequent-elements/",
        },
        {
          title: "Insert Interval",
          url: "https://leetcode.com/problems/insert-interval/",
        },
        { title: "Car Fleet", url: "https://leetcode.com/problems/car-fleet/" },
      ],
      hard: [
        {
          title: "Median of Two Sorted Arrays",
          url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        },
        {
          title: "Merge K Sorted Lists",
          url: "https://leetcode.com/problems/merge-k-sorted-lists/",
        },
        {
          title: "Find Median from Data Stream",
          url: "https://leetcode.com/problems/find-median-from-data-stream/",
        },
        {
          title: "Longest Substring with At Most K Distinct Characters",
          url: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
        },
        {
          title: "Create Sorted Array through Instructions",
          url: "https://leetcode.com/problems/create-sorted-array-through-instructions/",
        },
        {
          title: "Count of Range Sum",
          url: "https://leetcode.com/problems/count-of-range-sum/",
        },
        {
          title: "Reverse Pairs",
          url: "https://leetcode.com/problems/reverse-pairs/",
        },
        {
          title: "Maximum Gap",
          url: "https://leetcode.com/problems/maximum-gap/",
        },
        {
          title: "Shortest Subarray with Sum at Least K",
          url: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/",
        },
        {
          title: "Smallest Range Covering Elements from K Lists",
          url: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
        },
      ],
    },
  },
  {
    topic: "Arrays",
    levels: {
      basic: [
        { title: "Two Sum", url: "https://leetcode.com/problems/two-sum/" },
        {
          title: "Best Time to Buy and Sell Stock",
          url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        },
        {
          title: "Single Number",
          url: "https://leetcode.com/problems/single-number/",
        },
        {
          title: "Find the Duplicate Number",
          url: "https://leetcode.com/problems/find-the-duplicate-number/",
        },
        {
          title: "Move Zeroes",
          url: "https://leetcode.com/problems/move-zeroes/",
        },
        {
          title: "Merge Sorted Array",
          url: "https://leetcode.com/problems/merge-sorted-array/",
        },
        {
          title: "Intersection of Two Arrays II",
          url: "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
        },
        { title: "Plus One", url: "https://leetcode.com/problems/plus-one/" },
        {
          title: "Squares of a Sorted Array",
          url: "https://leetcode.com/problems/squares-of-a-sorted-array/",
        },
        {
          title: "Rotate Array",
          url: "https://leetcode.com/problems/rotate-array/",
        },
      ],
      medium: [
        {
          title: "Container With Most Water",
          url: "https://leetcode.com/problems/container-with-most-water/",
        },
        { title: "3Sum", url: "https://leetcode.com/problems/3sum/" },
        {
          title: "Subarray Sum Equals K",
          url: "https://leetcode.com/problems/subarray-sum-equals-k/",
        },
        {
          title: "Product of Array Except Self",
          url: "https://leetcode.com/problems/product-of-array-except-self/",
        },
        {
          title: "Find Minimum in Rotated Sorted Array",
          url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
        },
        {
          title: "Permutations",
          url: "https://leetcode.com/problems/permutations/",
        },
        {
          title: "Spiral Matrix",
          url: "https://leetcode.com/problems/spiral-matrix/",
        },
        {
          title: "Kth Largest Element in an Array",
          url: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
        },
        {
          title: "Combination Sum",
          url: "https://leetcode.com/problems/combination-sum/",
        },
        {
          title: "Valid Sudoku",
          url: "https://leetcode.com/problems/valid-sudoku/",
        },
      ],
      hard: [
        {
          title: "Trapping Rain Water",
          url: "https://leetcode.com/problems/trapping-rain-water/",
        },
        {
          title: "Jump Game II",
          url: "https://leetcode.com/problems/jump-game-ii/",
        },
        {
          title: "First Missing Positive",
          url: "https://leetcode.com/problems/first-missing-positive/",
        },
        {
          title: "Median of Two Sorted Arrays",
          url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        },
        { title: "N-Queens", url: "https://leetcode.com/problems/n-queens/" },
        {
          title: "Regular Expression Matching",
          url: "https://leetcode.com/problems/regular-expression-matching/",
        },
        {
          title: "Maximal Rectangle",
          url: "https://leetcode.com/problems/maximal-rectangle/",
        },
        {
          title: "Reverse Pairs",
          url: "https://leetcode.com/problems/reverse-pairs/",
        },
        {
          title: "Word Search II",
          url: "https://leetcode.com/problems/word-search-ii/",
        },
        {
          title: "Sliding Window Maximum",
          url: "https://leetcode.com/problems/sliding-window-maximum/",
        },
      ],
    },
  },
  {
    topic: "Strings",
    levels: {
      basic: [
        {
          title: "Valid Palindrome",
          url: "https://leetcode.com/problems/valid-palindrome/",
        },
        {
          title: "Reverse String",
          url: "https://leetcode.com/problems/reverse-string/",
        },
        {
          title: "First Unique Character in a String",
          url: "https://leetcode.com/problems/first-unique-character-in-a-string/",
        },
        {
          title: "Count and Say",
          url: "https://leetcode.com/problems/count-and-say/",
        },
        {
          title: "Longest Common Prefix",
          url: "https://leetcode.com/problems/longest-common-prefix/",
        },
        {
          title: "String to Integer (atoi)",
          url: "https://leetcode.com/problems/string-to-integer-atoi/",
        },
        {
          title: "String Compression",
          url: "https://leetcode.com/problems/string-compression/",
        },
        {
          title: "Letter Combinations of a Phone Number",
          url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        },
        {
          title: "Find All Anagrams in a String",
          url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
        },
        {
          title: "Valid Anagram",
          url: "https://leetcode.com/problems/valid-anagram/",
        },
      ],
      medium: [
        {
          title: "Longest Substring Without Repeating Characters",
          url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        },
        {
          title: "Group Anagrams",
          url: "https://leetcode.com/problems/group-anagrams/",
        },
        {
          title: "String to Integer (atoi)",
          url: "https://leetcode.com/problems/string-to-integer-atoi/",
        },
        {
          title: "Minimum Window Substring",
          url: "https://leetcode.com/problems/minimum-window-substring/",
        },
        {
          title: "Palindrome Partitioning",
          url: "https://leetcode.com/problems/palindrome-partitioning/",
        },
        {
          title: "Word Break",
          url: "https://leetcode.com/problems/word-break/",
        },
        {
          title: "Decode Ways",
          url: "https://leetcode.com/problems/decode-ways/",
        },
        {
          title: "Find All Anagrams in a String",
          url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
        },
        {
          title: "Multiply Strings",
          url: "https://leetcode.com/problems/multiply-strings/",
        },
        {
          title: "Edit Distance",
          url: "https://leetcode.com/problems/edit-distance/",
        },
      ],
      hard: [
        {
          title: "Regular Expression Matching",
          url: "https://leetcode.com/problems/regular-expression-matching/",
        },
        {
          title: "Longest Palindromic Substring",
          url: "https://leetcode.com/problems/longest-palindromic-substring/",
        },
        {
          title: "String Compression",
          url: "https://leetcode.com/problems/string-compression/",
        },
        {
          title: "Find Minimum in Rotated Sorted Array",
          url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
        },
        {
          title: "String Matching in an Array",
          url: "https://leetcode.com/problems/string-matching-in-an-array/",
        },
        {
          title: "Integer to Roman",
          url: "https://leetcode.com/problems/integer-to-roman/",
        },
        {
          title: "Roman to Integer",
          url: "https://leetcode.com/problems/roman-to-integer/",
        },
        {
          title: "Count and Say",
          url: "https://leetcode.com/problems/count-and-say/",
        },
        {
          title: "Palindrome Pairs",
          url: "https://leetcode.com/problems/palindrome-pairs/",
        },
        {
          title: "Word Search II",
          url: "https://leetcode.com/problems/word-search-ii/",
        },
      ],
    },
  },
  {
    topic: "Linked Lists",
    levels: {
      basic: [
        {
          title: "Reverse Linked List",
          url: "https://leetcode.com/problems/reverse-linked-list/",
        },
        {
          title: "Merge Two Sorted Lists",
          url: "https://leetcode.com/problems/merge-two-sorted-lists/",
        },
        {
          title: "Linked List Cycle",
          url: "https://leetcode.com/problems/linked-list-cycle/",
        },
        {
          title: "Remove Duplicates from Sorted List",
          url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
        },
        {
          title: "Delete Node in a Linked List",
          url: "https://leetcode.com/problems/delete-node-in-a-linked-list/",
        },
        {
          title: "Palindrome Linked List",
          url: "https://leetcode.com/problems/palindrome-linked-list/",
        },
        {
          title: "Intersection of Two Linked Lists",
          url: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
        },
        {
          title: "Linked List Cycle II",
          url: "https://leetcode.com/problems/linked-list-cycle-ii/",
        },
        {
          title: "Remove Linked List Elements",
          url: "https://leetcode.com/problems/remove-linked-list-elements/",
        },
        {
          title: "Add Two Numbers",
          url: "https://leetcode.com/problems/add-two-numbers/",
        },
      ],
      medium: [
        {
          title: "Flatten a Linked List",
          url: "https://leetcode.com/problems/flatten-a-linked-list/",
        },
        {
          title: "Swap Nodes in Pairs",
          url: "https://leetcode.com/problems/swap-nodes-in-pairs/",
        },
        {
          title: "Rearrange Linked List",
          url: "https://leetcode.com/problems/rearrange-linked-list/",
        },
        {
          title: "Reverse Linked List II",
          url: "https://leetcode.com/problems/reverse-linked-list-ii/",
        },
        {
          title: "Merge K Sorted Lists",
          url: "https://leetcode.com/problems/merge-k-sorted-lists/",
        },
        {
          title: "Remove Nth Node From End of List",
          url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        },
        {
          title: "Linked List Random Node",
          url: "https://leetcode.com/problems/linked-list-random-node/",
        },
        {
          title: "Reverse Nodes in k-Group",
          url: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        },
        {
          title: "Copy List with Random Pointer",
          url: "https://leetcode.com/problems/copy-list-with-random-pointer/",
        },
        { title: "Lru Cache", url: "https://leetcode.com/problems/lru-cache/" },
      ],
      hard: [
        {
          title: "Merge k Sorted Lists",
          url: "https://leetcode.com/problems/merge-k-sorted-lists/",
        },
        {
          title: "Add Two Numbers II",
          url: "https://leetcode.com/problems/add-two-numbers-ii/",
        },
        {
          title: "Reverse Nodes in k-Group",
          url: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        },
        {
          title: "Delete Middle Node",
          url: "https://leetcode.com/problems/delete-middle-node/",
        },
        {
          title: "Flatten Nested List Iterator",
          url: "https://leetcode.com/problems/flatten-nested-list-iterator/",
        },
        {
          title: "Linked List Cycle II",
          url: "https://leetcode.com/problems/linked-list-cycle-ii/",
        },
        {
          title: "Remove Duplicate Node from Unsorted Linked List",
          url: "https://leetcode.com/problems/remove-duplicate-node-from-unsorted-linked-list/",
        },
        {
          title: "Reorder List",
          url: "https://leetcode.com/problems/reorder-list/",
        },
        { title: "Sort List", url: "https://leetcode.com/problems/sort-list/" },
        {
          title: "Clone Graph",
          url: "https://leetcode.com/problems/clone-graph/",
        },
      ],
    },
  },
  {
    topic: "Stacks",
    levels: {
      basic: [
        {
          title: "Valid Parentheses",
          url: "https://leetcode.com/problems/valid-parentheses/",
        },
        { title: "Min Stack", url: "https://leetcode.com/problems/min-stack/" },
        {
          title: "Implement Stack using Queues",
          url: "https://leetcode.com/problems/implement-stack-using-queues/",
        },
        {
          title: "Evaluate Reverse Polish Notation",
          url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
        },
        {
          title: "Daily Temperature",
          url: "https://leetcode.com/problems/daily-temperature/",
        },
        {
          title: "Largest Rectangle in Histogram",
          url: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        },
        {
          title: "Next Greater Element I",
          url: "https://leetcode.com/problems/next-greater-element-i/",
        },
        {
          title: "Remove All Adjacent Duplicates in String",
          url: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",
        },
        {
          title: "Backspace String Compare",
          url: "https://leetcode.com/problems/backspace-string-compare/",
        },
        {
          title: "Valid Parentheses String",
          url: "https://leetcode.com/problems/valid-parentheses-string/",
        },
      ],
      medium: [
        {
          title: "Generate Parentheses",
          url: "https://leetcode.com/problems/generate-parentheses/",
        },
        {
          title: "Basic Calculator II",
          url: "https://leetcode.com/problems/basic-calculator-ii/",
        },
        {
          title: "Largest Rectangle in Histogram",
          url: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        },
        {
          title: "Next Greater Element II",
          url: "https://leetcode.com/problems/next-greater-element-ii/",
        },
        {
          title: "Evaluate Reverse Polish Notation",
          url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
        },
        {
          title: "Simplify Path",
          url: "https://leetcode.com/problems/simplify-path/",
        },
        {
          title: "Decode String",
          url: "https://leetcode.com/problems/decode-string/",
        },
        {
          title: "Remove All Adjacent Duplicates in String II",
          url: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/",
        },
        {
          title: "Basic Calculator",
          url: "https://leetcode.com/problems/basic-calculator/",
        },
        {
          title: "Evaluate Reverse Polish Notation",
          url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
        },
      ],
      hard: [
        {
          title: "Trapping Rain Water",
          url: "https://leetcode.com/problems/trapping-rain-water/",
        },
        {
          title: "Find the Celebrity",
          url: "https://leetcode.com/problems/find-the-celebrity/",
        },
        {
          title: "Maximal Rectangle",
          url: "https://leetcode.com/problems/maximal-rectangle/",
        },
        {
          title: "Daily Temperature",
          url: "https://leetcode.com/problems/daily-temperature/",
        },
        { title: "N-Queens", url: "https://leetcode.com/problems/n-queens/" },
        {
          title: "Expression Add Operators",
          url: "https://leetcode.com/problems/expression-add-operators/",
        },
        {
          title: "Largest Rectangle in Histogram",
          url: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        },
        {
          title: "Largest Rectangle in Histogram",
          url: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        },
      ],
    },
  },
  {
    topic: "Queues",
    levels: {
      basic: [
        {
          title: "Implement Queue using Stacks",
          url: "https://leetcode.com/problems/implement-queue-using-stacks/",
        },
        {
          title: "Design Circular Queue",
          url: "https://leetcode.com/problems/design-circular-queue/",
        },
        {
          title: "Moving Average from Data Stream",
          url: "https://leetcode.com/problems/moving-average-from-data-stream/",
        },
        {
          title: "Implement Stack using Queues",
          url: "https://leetcode.com/problems/implement-stack-using-queues/",
        },
        {
          title: "Perfect Squares",
          url: "https://leetcode.com/problems/perfect-squares/",
        },
        { title: "Max Queue", url: "https://leetcode.com/problems/max-queue/" },
        {
          title: "Sliding Window Maximum",
          url: "https://leetcode.com/problems/sliding-window-maximum/",
        },
        {
          title: "Number of Islands",
          url: "https://leetcode.com/problems/number-of-islands/",
        },
        {
          title: "Basic Calculator II",
          url: "https://leetcode.com/problems/basic-calculator-ii/",
        },
        {
          title: "Zombie Infection",
          url: "https://leetcode.com/problems/zombie-infection/",
        },
      ],
      medium: [
        {
          title: "Queue Reconstruction by Height",
          url: "https://leetcode.com/problems/queue-reconstruction-by-height/",
        },
        {
          title: "Moving Average from Data Stream",
          url: "https://leetcode.com/problems/moving-average-from-data-stream/",
        },
        {
          title: "Sliding Window Maximum",
          url: "https://leetcode.com/problems/sliding-window-maximum/",
        },
        {
          title: "Implement Stack using Queues",
          url: "https://leetcode.com/problems/implement-stack-using-queues/",
        },
        {
          title: "Design and Implement Front End",
          url: "https://leetcode.com/problems/design-and-implement-front-end/",
        },
        {
          title: "Sort Stack",
          url: "https://leetcode.com/problems/sort-stack/",
        },
      ],
      hard: [
        {
          title: "Median of Data Stream",
          url: "https://leetcode.com/problems/median-of-data-stream/",
        },
        {
          title: "Sliding Window Maximum",
          url: "https://leetcode.com/problems/sliding-window-maximum/",
        },
        {
          title: "Basic Calculator III",
          url: "https://leetcode.com/problems/basic-calculator-iii/",
        },
      ],
    },
  },
];

const ProblemsList = () => {
  return (
    <div className=" px-6 pb-12 pt-28  bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        DSA Practice Problems
      </h1>
      {problemsData.map((topic, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {topic.topic}
          </h2>
          {["basic", "medium", "hard"].map((level) => (
            <div key={level}>
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </h3>
              <ul className="space-y-2">
                {topic.levels[level].map((problem, i) => (
                  <li key={i} className="flex justify-between items-center">
                    <span className="text-gray-700">{problem.title}</span>
                    <a
                      href={problem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                      Solve
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProblemsList;

// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

// Return the answer with the smaller index first.

// input : array of numbers , and target number
// output: array of numbers
// approach: use a hash map to keep track of numbers we've seen , and check if we already have number we need

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum1(nums, target) {
  // create a new map to store numbers we've seen
  const seen = new Map();

  // iterate over nums array
  for (let i = 0; i < nums; i++) {
    // define what number we need
    const needed = target - nums[i];

    // check if map already has the needed value
    if (seen.has(needed)) {
      // if it does, we can get the index of stored needed value, and current index, and return them in an array
      return [seen.get(needed), i];
    }
    // otherwise, set the current value to map of seen nums
    seen.set(nums[i], i);
  }
}

function twoSum2(nums, target) {
  // create a new object to store the values we've seen
  const seen = {};

  // iterate over nums array
  for (const [index, value] of nums.entries()) {
    // define what number we need
    const needed = target - value;

    // check if object already has the needed value as a property
    if (seen.hasOwnProperty(needed)) {
      // if it does, we can get the index of stored needed value, and current index, and return them in an array
      return [seen[needed], index];
    }
    // otherwise, define and add the current value and index to the seen object
    seen[value] = index;
  }
}

// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

function hasDuplicate(nums) {
    let numsSet = new Set(nums)
    return numsSet.size !== nums.length
}

function hasDuplicate2(nums) {
    let numsCount = {}
    for (const num of nums) {
        if (numsCount[num]) return true;
        numsCount[num] = 1
    }
    return false
}
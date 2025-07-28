class Solution1 {
  containsDuplicate(nums) {
    return new Set(nums).size !== nums.length;
  }
}

class Solution2 {
  containsDuplicate(nums) {
    const numsSet = new Set();

    for (const num of nums) {
      if (numsSet[num]) return true;
      numsSet[num] + 1;
    }

    return false;
  }
}

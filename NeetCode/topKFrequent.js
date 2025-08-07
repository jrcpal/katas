// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:
// Input: nums = [1,2,2,3,3,3], k = 2
// Output: [2,3]

// Example 2:
// Input: nums = [7,7], k = 1
// Output: [7]

function topKFrequentBucketSorting(nums,k) {
    const frequencyMap = {}
    const buckets = []

    // 1. map frequency of nums into the object
    for (const num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1
    }

    // 2. drop the frequencies as keys, and nums as values into the buckets
    for (const [num, freq] of Object.entries ) {
        buckets[freq] = (buckets[freq] || []).concat(num)
    }

    //3. iterate through the buckets , starting at the end, to extract largest frequencies
    let topK = []
    for (let i = buckets.length - 1; i >= 0 && maxFrequencies.length < k; i--) {
        if (buckets[i]) {
            topK.push(...buckets[i])
            // use spread operator here because values of buckets[i] is an array that may contain multiple elements
        }
    }

    return topK.splice(0, k)
    // use splice because a single bucket may have contained more values than needed

}

function topKFrequentObjectAndMaxValues(nums, k) {
    const count = {}
    const result = []

    for (const num of nums) {
        count[num] = (count[num] || 0) + 1
    }

    while (result.length < k) {
        const max = Math.max(...Object.values(count))

        for (const num in count) {
            if (count[num] === max) {
                result.push(count[num])
                count[num] = 0
            }
        }
    }

    return result
}
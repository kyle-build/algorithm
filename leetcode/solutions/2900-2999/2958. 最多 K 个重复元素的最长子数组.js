function maxSubarrayLength(nums, k) {
    const cnt = new Map();
    let left = 0;
    let ans = 0;
    for (let right = 0; right < nums.length; right++) {
        const x = nums[right];
        cnt.set(x, (cnt.get(x) || 0) + 1);
        while (cnt.get(x) > k) {
            const leftVal = nums[left];
            cnt.set(leftVal, cnt.get(leftVal) - 1);
            left++;
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
}
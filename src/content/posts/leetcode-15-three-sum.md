---
title: "LeetCode 15 - 三数之和"
pubDate: "2024-3-21"
categories: ["LeetCode"]
description: "给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。"
---

## 排序+双指针

时间：`O(N^2)` 空间： `O(N^2)`

```java
class Solution {
    List<List<Integer>> res = new LinkedList<>();
    Set<List<Integer>> filter = new HashSet<>();
    public List<List<Integer>> threeSum(int[] nums) {
        int n = nums.length;
        Arrays.sort(nums);
        for (int i = 0; i < n; i++) {
            int target = - nums[i], left = 0, right = n - 1;
            while (left < right) {
                if (nums[left] + nums[right] > target) right--;
                else if (nums[left] + nums[right] < target) left++;
                else {
                    if (left < right && left != i && right != i) {
                        List<Integer> resItem = new ArrayList<>();
                        if (i < left) resItem.add(nums[i]);
                        resItem.add(nums[left]);
                        if (i > left && i < right) resItem.add(nums[i]);
                        resItem.add(nums[right]);
                        if (i > right) resItem.add(nums[i]);
                        if (!filter.contains(resItem)) {
                            res.add(resItem);
                            filter.add(resItem);
                        }
                    }
                    left++;
                }
            }
        }
        return res;
    }
}
```

## 优化后

通过升序遍历避免重复而不是哈希表

时间：`O(N^2)` 空间： `O(1)`

```java
class Solution {
    public List<List<Integer>> res = new LinkedList<>();
    public List<List<Integer>> threeSum(int[] nums) {
        int n = nums.length;
        Arrays.sort(nums);
        for (int i = 0; i < n; i++) {
            // avoid repetitive
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            // left from i + 1, avoid repetitive
            int left = i + 1, right = n - 1;
            while (left < right) {
                int sum = nums[left] + nums[right] + nums[i];
                // two pointer threod: one pointer ++, another point must --
                if (sum > 0) right--;
                else if (sum < 0) left++;
                else {
                    res.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    // avoid repetitive
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    // find the non-repetitive postion
                    left++;
                    right--;
                }
            }
        }
        return res;
    }
}
```

> [https://leetcode.cn/problems/3sum/](https://leetcode.cn/problems/3sum/)

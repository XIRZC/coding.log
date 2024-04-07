---
title: "LeetCode 1 - 两数之和"
pubDate: "2024-3-21"
categories: ["LeetCode"]
description: "给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。"
---

## 暴力枚举

时间：`O(N^2)` 空间： `O(1)`

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] res = new int[2];
        for(int i = 0; i < nums.length; i++) {
            for(int j = i + 1; j < nums.length; j++) {
                if(nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        return new int[0];
    }
}
```

## 哈希表

时间：`O(N)` 空间： `O(N)`

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int len = nums.length;
        HashMap<Integer, Integer> map = new HashMap<>(len);
        for(int i = 0; i < len; i++) {
            if (!map.containsKey(target - nums[i])) {
                map.put(nums[i], i);
            }
            else {
                return new int[] {i, map.get(target - nums[i])};
            }
        }
        return new int[0];
    }
}
```

> [https://leetcode.cn/problems/two-sum/](https://leetcode.cn/problems/two-sum/)

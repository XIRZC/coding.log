---
title: "LeetCode 153 - 寻找旋转排序数组中的最小值"
pubDate: "2024-4-22"
categories: ["LeetCode"]
description: "寻找旋转排序数组中的最小值"
---

## 寻找旋转排序数组中的最小值 - 朴素做法

时间：`O(N)` 空间： `O(1)`

```c++
class Solution {
public:
    int findMin(vector<int>& nums) {
        int res = 10000;
        for (int i = 0; i < nums.size(); i++) res = min(res, nums[i]);
        return res;
    }
};
```

## 寻找旋转排序数组中的最小值 - 二分做法

时间：`O(LogN)` 空间：`O(1)`

```c++
class Solution {
public:
    int findMin(vector<int>& nums) {
        int n = nums.size(), l = 0, r = n - 1;
        while (l < r) {
            int m = l + r >> 1;
            if (nums[m] <= nums[r]) r = m;
            else l = m + 1;
        }
        return nums[l];
    }
};
```

> [https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array)

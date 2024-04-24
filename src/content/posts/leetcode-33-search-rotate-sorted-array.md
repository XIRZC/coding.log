---
title: "LeetCode 33 - 搜索旋转排序数组"
pubDate: "2024-4-22"
categories: ["LeetCode"]
description: "搜索旋转排序数组"
---

## 搜索旋转排序数组 - 朴素做法

时间：`O(N)` 空间： `O(1)`

```c++
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int n = nums.size();
        for (int i = 0; i < n; i++) {
            if (nums[i] == target)
            return i;
        }
        return -1;
    }
};
```

## 搜索旋转排序数组 - 二分做法

时间：`O(LogN)` 空间：`O(1)`

```c++
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int n = nums.size(), l = 0, r = n - 1;
        while (l <= r) {
            int mid = l + r >> 1;
            if (nums[mid] == target) return mid;
            if (nums[l] <= nums[mid]) {
                if (nums[l] <= target && target <= nums[mid]) r = mid - 1;
                else l = mid + 1;
            }
            else {
                if (nums[mid] <= target && target <= nums[r]) l = mid + 1;
                else r = mid - 1;
            }
        }
        return -1;
    }
};
```

> [https://leetcode.cn/problems/search-in-rotated-sorted-array](https://leetcode.cn/problems/search-in-rotated-sorted-array)

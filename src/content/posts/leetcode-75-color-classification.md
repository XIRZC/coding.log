---
title: "LeetCode 75 - 颜色分类"
pubDate: "2024-5-3"
categories: ["LeetCode"]
description: "颜色分类"
---

## 颜色分类

时间：`O(N)` 空间： `O(1)`

```c++
class Solution {
public:
    void sortColors(vector<int>& nums) {
        int n = nums.size(), idx0 = 0, idx2 = n - 1;
        for (int i = 0; i < n; i++) {
            if (nums[i] == 0) swap(nums[idx0++], nums[i]);
        }
        for (int i = n - 1; i >= 0; i--) {
            if (nums[i] == 2) swap(nums[idx2--], nums[i]);
        }
    }
};
```

> [https://leetcode.cn/problems/sort-colors](https://leetcode.cn/problems/sort-colors)

---
title: "LeetCode 26 - 删除有序数组中的重复项"
pubDate: "2024-5-4"
categories: ["LeetCode"]
description: "删除有序数组中的重复项"
---

## 删除有序数组中的重复项

时间：`O(N)` 空间： `O(1)`

```c++
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int n = nums.size(), idx = 0;
        for (int i = 0; i < n; i++) {
            if (!i || nums[i] != nums[i - 1]) nums[idx++] = nums[i];
        }
        return idx;
    }
};
```

> [https://leetcode.cn/problems/remove-duplicates-from-sorted-array](https://leetcode.cn/problems/remove-duplicates-from-sorted-array)

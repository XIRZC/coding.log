---
title: "LeetCode 31 - 下一个排列"
pubDate: "2024-5-3"
categories: ["LeetCode"]
description: "下一个排列"
---

## 下一个排列

时间：`O(N)` 空间： `O(1)`

```c++
class Solution {
public:
    void nextPermutation(vector<int>& nums) {
        int n = nums.size();
        int i = n - 1, j = n - 1;
        while (i > 0) {
            if (nums[i - 1] < nums[i]) break;
            i--;
        }
        if (i > 0) {
            while (j >= i) {
                if (nums[i - 1] < nums[j]) break;
                j--;
            }
            swap(nums[i - 1], nums[j]);
        }
        j = n - 1;
        while (i < j) {
            swap(nums[i], nums[j]);
            i++;
            j--;
        }
    }
};
```

> [https://leetcode.cn/problems/next-permutation](https://leetcode.cn/problems/next-permutation)

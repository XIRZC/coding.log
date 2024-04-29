---
title: "LeetCode 152 - 乘积最大子数组"
pubDate: "2024-4-25"
categories: ["LeetCode"]
description: "乘积最大子数组"
---

## 乘积最大子数组 - 暴力

时间：`O(N^3)` 空间： `O(1)`

```c++
const int N = 20010;

class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int n = nums.size();
        int res = INT_MIN;
        for (int i = 1; i <= n; i++) {
            for (int j = i; j <= n; j++) {
                int t = 1;
                for (int k = i; k <= j; k++) t *= nums[k - 1];
                res = max(res, t);
            }
        }
        return res;
    }
};
```

## 动态规划

时间：`O(N)` 空间：`O(N)`

状态转移：maxdp[i] = max(maxdp[i - 1] * nums[i], nums[i]) if nums[i] >= 0
                 = max(mindp[i - 1] * nums[i], nums[i]) if nums[i] < 0
        mindp[i] = min(mindp[i - 1] * nums[i], nums[i]) if nums[i] >= 0
                 = min(maxdp[i - 1] * nums[i], nums[i]) if nums[i] < 0

```c++
const int N = 20010;

class Solution {
public:

    int mindp[N], maxdp[N];

    int maxProduct(vector<int>& nums) {
        int n = nums.size(), res;
        res = maxdp[1] = mindp[1] = nums[0];
        for (int i = 2; i <= n; i++) {
            maxdp[i] = max(mindp[i - 1] * nums[i - 1], max(maxdp[i - 1] * nums[i - 1], nums[i - 1]));
            mindp[i] = min(maxdp[i - 1] * nums[i - 1], min(mindp[i - 1] * nums[i - 1], nums[i - 1]));
            res = max(res, maxdp[i]);
        }
        return res;
    }
};
```

## 动态规划 - 空间优化

时间：`O(N)` 空间：`O(1)`

```c++
const int N = 20010;

class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int n = nums.size(), res, mindp, maxdp;
        res = maxdp = mindp = nums[0];
        for (int i = 2; i <= n; i++) {
            int tmaxdp = maxdp, tmindp = mindp;
            maxdp = max(tmindp * nums[i - 1], max(tmaxdp * nums[i - 1], nums[i - 1]));
            mindp = min(tmaxdp * nums[i - 1], min(tmindp * nums[i - 1], nums[i - 1]));
            res = max(res, maxdp);
        }
        return res;
    }
};
```

> [https://leetcode.cn/problems/maximum-product-subarray](https://leetcode.cn/problems/maximum-product-subarray)
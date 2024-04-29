---
title: "LeetCode 416 - 分割等和子集"
pubDate: "2024-4-25"
categories: ["LeetCode"]
description: "分割等和子集"
---

## 分割等和子集 - 回溯暴力

时间：`O(N!)` 空间： `O(N)`

```c++
const int N = 210;

class Solution {
public:

    int sum = 0, n;
    bool st[N], flag = false;

    void backtrack(vector<int>& nums, int l, int x) {
        if (flag || l == n) return;
        if (sum == 2 * x) {
            flag = true;
            return;
        }
        for (int i = 0; i < n; i++) {
            if (!st[i]) {
                st[i] = true;
                backtrack(nums, l + 1, x + nums[i]);
                st[i] = false;
            }
        }
    }

    bool canPartition(vector<int>& nums) {
        n = nums.size();
        for (int i = 0; i < n; i++) sum += nums[i];
        backtrack(nums, 0, 0);
        return flag;
    }
};
```

## 动态规划

时间：`O(N)` 空间：`O(N)`

状态转移：dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]] if j >= nums[i]
                 = dp[i - 1][j] else

```c++
const int N = 210, M = 10010;

class Solution {
public:

    bool dp[N][M];

    bool canPartition(vector<int>& nums) {
        int n = nums.size(), sum = 0;
        for (int i = 0; i < n; i++) sum += nums[i];
        if (sum % 2) return false;
        else sum = sum / 2;
        for (int i = 1; i <= n; i++) {
            dp[i][0] = true;
            for (int j = 1; j <= sum; j++) {
                if (j >= nums[i - 1]) dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
                else dp[i][j] = dp[i - 1][j];
            }
        }
        return dp[n][sum];
    }
};
```

## 动态规划 - 空间优化

```c++
const int N = 210, M = 10010;

class Solution {
public:

    bool dp[M];

    bool canPartition(vector<int>& nums) {
        int n = nums.size(), sum = 0;
        for (int i = 0; i < n; i++) sum += nums[i];
        if (sum % 2) return false;
        else sum = sum / 2;
        for (int i = 1; i <= n; i++) {
            dp[0] = true;
            for (int j = sum; j >= nums[i - 1]; j--) dp[j] = dp[j] || dp[j - nums[i - 1]];
        }
        return dp[sum];
    }
};
```

> [https://leetcode.cn/problems/partition-equal-subset-sum](https://leetcode.cn/problems/partition-equal-subset-sum)
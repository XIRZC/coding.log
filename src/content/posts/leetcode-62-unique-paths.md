---
title: "LeetCode 62 - 不同路径"
pubDate: "2024-4-21"
categories: ["LeetCode"]
description: "不同路径"
---

## 不同路径

时间：`O(N^2)` 空间： `O(N^2)`

状态转移：dp[i][j] = dp[i - 1][j] + dp[i][j - 1]

```c++
const int N = 110;
int dp[N][N];

class Solution {
public:
    int uniquePaths(int m, int n) {
        memset(dp, 0, sizeof dp);
        dp[0][1] = 1;
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
        return dp[m][n];
    }
};
```

## 空间压缩

时间：`O(N^2)` 空间：`O(N)`

```c++
const int N = 110;
int dp[N];

class Solution {
public:
    int uniquePaths(int m, int n) {
        memset(dp, 0, sizeof dp);
        dp[1] = 1;
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                dp[j] = dp[j] + dp[j - 1];
            }
        }
        return dp[n];
    }
};
```

> [https://leetcode.cn/problems/unique-paths/](https://leetcode.cn/problems/unique-paths/)

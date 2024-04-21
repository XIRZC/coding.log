---
title: "LeetCode 64 - 最小路径和"
pubDate: "2024-4-20"
categories: ["LeetCode"]
description: "最小路径和"
---

## 最小路径和

时间：`O(N^2)` 空间： `O(N^2)`

状态转移：dp[i][j] = min(dp[i - 1][j], dp[i][j - 1]) + a[i][j]

```c++
const int N = 210;
int dp[N][N];

class Solution {
public:
    int minPathSum(vector<vector<int>>& grid) {
        memset(dp, 0x3f, sizeof dp);
        int n = grid.size(), m = grid[0].size();
        dp[0][1] = dp[1][0] = 0;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                 dp[i][j] = min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
            }
        }
        return dp[n][m];
    }
};
```

> [https://leetcode.cn/problems/minimum-path-sum](https://leetcode.cn/problems/minimum-path-sum)

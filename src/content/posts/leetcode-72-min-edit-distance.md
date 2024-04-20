---
title: "LeetCode 72 - 编辑距离"
pubDate: "2024-4-20"
categories: ["LeetCode"]
description: "编辑距离"
---

## 编辑距离

时间：`O(N^2)` 空间： `O(N^2)`

状态转移：dp[i][j] = min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1 if a[i] != b[j]
                 = dp[i - 1][j - 1] if a[i] == b[j]

```c++
const int N = 510;
int dp[N][N];

class Solution {
public:
    int minDistance(string word1, string word2) {
        int n = word1.length(), m = word2.length();
        for (int i = 0; i <= n; i++) dp[i][0] = i;
        for (int i = 0; i <= m; i++) dp[0][i] = i;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                dp[i][j] = min(min(dp[i - 1][j], dp[i][j - 1]) + 1, dp[i - 1][j - 1] + (word1[i - 1] != word2[j - 1]));
            }
        }
        return dp[n][m];
    }
};
```

> [https://leetcode.cn/problems/edit-distance/](https://leetcode.cn/problems/edit-distance/)

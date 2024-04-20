---
title: "LeetCode 1143 - 最长公共子序列"
pubDate: "2024-4-20"
categories: ["LeetCode"]
description: "最长公共子序列"
---

## 最长公共子序列

时间：`O(N^2)` 空间： `O(N^2)`

状态转移：dp[i][j] = max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1] + (a[i] == b[j]))

```c++
const int N = 1010;
int dp[N][N];

class Solution {
public:
    int longestCommonSubsequence(string text1, string text2) {
        int n = text1.length();
        int m = text2.length();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                dp[i][j] = max(max(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1] + (text1[i - 1] == text2[j - 1]));
            }
        }
        return dp[n][m];
    }
};
```

> [https://leetcode.cn/problems/longest-common-subsequence/](https://leetcode.cn/problems/longest-common-subsequence/)

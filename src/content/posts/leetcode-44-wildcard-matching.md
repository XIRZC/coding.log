---
title: "LeetCode 44 - 通配符匹配"
pubDate: "2024-4-24"
categories: ["LeetCode"]
description: "通配符匹配"
---

## 通配符匹配 - 动态规划

时间：`O(NM)` 空间： `O(NM)`

状态转移：dp[i][j] = dp[i - 1][j - 1] if s[i] == p[j] || p[j] == '?'
                 = dp[i - 1][j] || dp[i][j - 1] if p[j] == '*'
                 = false else

```c++
const int N = 2010;

class Solution {
public:

    bool dp[N][N];

    bool isMatch(string s, string p) {
        int n = s.size(), m = p.size();
        dp[0][0] = true;
        for (int i = 1; i <= m; i++) {
            if (p[i - 1] != '*') break;
            dp[0][i] = true;
        }
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                if (s[i - 1] == p[j - 1] || p[j - 1] == '?') dp[i][j] = dp[i - 1][j - 1];
                else if (p[j - 1] == '*') dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
                else dp[i][j] = false;
            }
        }
        return dp[n][m];
        return 0;
    }
};
```

> [https://leetcode.cn/problems/wildcard-matching/](https://leetcode.cn/problems/wildcard-matching/)
---
title: "LeetCode 392 - 判断子序列"
pubDate: "2024-5-5"
categories: ["LeetCode"]
description: "判断子序列"
---

## 判断子序列 - 双指针

时间：`O(N + M)` 空间： `O(1)`

```c++
class Solution {
public:
    bool isSubsequence(string s, string t) {
        int n = t.size(), m = s.size();
        int i = 0, j = 0;
        while (i < n) {
            while (i < n && t[i] != s[j]) i++;
            if (i < n) {
                i++;
                j++;
            }
            if (j == m) return true;
        }
        return j == m;
    }
};
```

## 动态规划预处理

时间：`O(N)` 空间：`O(N)`

dp[i][j]表示以i为开头t字符串中字符为'a'+i的起始位置

状态转移：dp[i][j] = i if t[i] == 'a' + j
                 = dp[i + 1][j] else


```c++
const int N = 10010;

class Solution {
public:

    int dp[N][26];

    bool isSubsequence(string s, string t) {
        int n = t.size(), m = s.size();
        memset(dp, -1, sizeof dp);
        for (int i = n - 1; i >= 0; i--) {
            for (int j = 0; j < 26; j++) {
                if (t[i] == 'a' + j) dp[i][j] = i;
                else dp[i][j] = dp[i + 1][j];
            }
        }
        int k = 0;
        for (int i = 0; i < m; i++) {
            k = dp[k][s[i] - 'a'];
            if (k == -1) return false;
            k++;
        }
        return true;
    }
};
```

> [https://leetcode.cn/problems/is-subsequence](https://leetcode.cn/problems/is-subsequence)

---
title: "LeetCode 131 - 分割回文串"
pubDate: "2024-4-21"
categories: ["LeetCode"]
description: "分割回文串"
---

## 分割回文串 - 动态规划预处理+回溯

时间：`O(N . 2^N)` 空间： `O(N^2)`

```c++
const int N = 20;

class Solution {
public:

    vector<vector<string>> res;
    vector<string> path;
    int dp[N][N];
    int n;
    string str;

    void backtrack(int l) {
        if (l == n) {
            res.push_back(path);
            return;
        }
        for (int i = l; i < n; i++) {
            if (dp[i - l + 1][l + 1] > 0) {
                path.push_back(str.substr(l, i - l + 1));
                backtrack(i + 1);
                path.pop_back();
            }
        }
    }

    vector<vector<string>> partition(string s) {
        n = s.length();
        str = s;
        memset(dp, 0, sizeof dp);
        for (int l = 1; l <= n; l++) {
            for (int i = 1; i <= n - l + 1; i++) {
                if (l == 1) dp[l][i] = 1;
                else {
                    if ((l - 2 == 0 || dp[l - 2][i + 1] != 0) && s[i - 1] == s[i + l - 1 - 1]) {
                        dp[l][i] = dp[l - 2][i + 1] + 2;
                    }
                }
            }
        }
        backtrack(0);
        return res;
    }
};
```

> [https://leetcode.cn/problems/palindrome-partitioning](https://leetcode.cn/problems/palindrome-partitioning)

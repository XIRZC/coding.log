---
title: "LeetCode 5 - 最长回文子串"
pubDate: "2024-4-20"
categories: ["LeetCode"]
description: "最长回文子串"
---

## 最长回文子串-暴力解法-50%样例

时间：`O(N^3)` 空间： `O(N^2)`

```c++
class Solution {
public:
    int ispalindrome(string s) {
        int i = 0, j = s.length() - 1;
        while (i < j) {
            if (s[i] == s[j]) {
                i++;
                j--;
            }
            else return -1;
        }
        return s.length();
    }

    string longestPalindrome(string s) {
        int res = 0;
        string tgt;
        for (int i = 0; i < s.length(); i++) {
            for (int j = i; j < s.length(); j++) {
                string str = s.substr(i, j - i + 1);
                int val = ispalindrome(str);
                if (val > res) {
                    res = val;
                    tgt = str;
                }
            }
        }
        return tgt;
    }
};
```

## 二维动态规划

时间：`O(N^2)` 空间：`O(N^2)`

状态转移方程：dp[l][i] = dp[l - 2][i + 1] + 2 if (l - 2 == 0 || dp[l - 2][i + 1] != 0) && s[i] == s[i + l - 1]
                    = 0 else

```c++
const int N = 1010;
int dp[N][N];

class Solution {
public:
    string longestPalindrome(string s) {
        int n = s.length();
        int maxl, maxi, maxval = 0;
        memset(dp, 0, sizeof dp);
        for (int l = 1; l <= n; l++) {
            for (int i = 1; i <= n - l + 1; i++) {
                if (l == 1) dp[l][i] = 1;
                else {
                    if ((l - 2 == 0 || dp[l - 2][i + 1] != 0) && s[i - 1] == s[i + l - 1 - 1]) {
                        dp[l][i] = dp[l - 2][i + 1] + 2;
                    }
                }
                if (dp[l][i] > maxval) {
                    maxval = dp[l][i];
                    maxl = l;
                    maxi = i - 1;
                }
            }
        }
        return s.substr(maxi, maxl);
    }
};
```

> [https://leetcode.cn/problems/longest-palindromic-substring](https://leetcode.cn/problems/longest-palindromic-substring)

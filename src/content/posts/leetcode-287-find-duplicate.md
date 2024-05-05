---
title: "LeetCode 392 - 判断子序列"
pubDate: "2024-5-4"
categories: ["LeetCode"]
description: "判断子序列"
---

## 判断子序列

时间：`O(N)` 空间： `O(1)`

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

> [https://leetcode.cn/problems/is-subsequence](https://leetcode.cn/problems/is-subsequence)

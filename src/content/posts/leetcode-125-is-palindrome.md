---
title: "LeetCode 125 - 验证回文串"
pubDate: "2024-5-4"
categories: ["LeetCode"]
description: "验证回文串"
---

## 验证回文串

时间：`O(N)` 空间： `O(1)`

```c++
class Solution {
public:

    char tolower(char ch) {
        if (ch >= 'A' && ch <= 'Z') return ch - 'A' + 'a';
        return ch;
    }

    bool isPalindrome(string s) {
        int n = s.size(), cnt = 0;
        for (int i = 0; i < n; i++) {
            if (isalnum(s[i])) s[cnt++] = s[i];
        }
        int l = 0, r = cnt - 1;
        while (l < r) {
            if (tolower(s[l]) != tolower(s[r])) return false;
            l++;
            r--;
        }
        return true;
    }
};
```

> [https://leetcode.cn/problems/remove-duplicates-from-sorted-array](https://leetcode.cn/problems/remove-duplicates-from-sorted-array)

---
title: "LeetCode 383 - 赎金信"
pubDate: "2024-5-5"
categories: ["LeetCode"]
description: "赎金信"
---

## 哈希表

时间：`O(N)` 空间： `O(N)`

```c++
class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        int r[26], m[26];
        for (int i = 0; i < ransomNote.size(); i++) r[ransomNote[i] - 'a']++;
        for (int i = 0; i < magazine.size(); i++) m[magazine[i] - 'a']++;
        for (int i = 0; i < 26; i++) {
            if (m[i] < r[i]) return false;
        }
        return true;
    }
};
```

> [https://leetcode.cn/problems/ransom-note](https://leetcode.cn/problems/ransom-note)

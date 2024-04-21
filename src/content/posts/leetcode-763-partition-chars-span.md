---
title: "LeetCode 763 - 划分字母区间"
pubDate: "2024-4-21"
categories: ["LeetCode"]
description: "划分字母区间"
---

## 划分字母区间-贪心

时间：`O(N)` 空间： `O(1)`

```c++
const int N = 510;
int state[N];

class Solution {
public:
    vector<int> partitionLabels(string s) {
        vector<int> res;
        int n = s.length();
        for (int i = 0; i < n; i++) state[s[i] - 'a'] = i;
        for (int i = 0; i < n; i++) {
            int t = state[s[i] - 'a'];
            for (int j = i; j < t; j++) t = max(t, state[s[j] - 'a']);
            res.push_back(t - i + 1);
            i = t;
        }
        return res;
    }
};
```

> [https://leetcode.cn/problems/partition-labels](https://leetcode.cn/problems/partition-labels)
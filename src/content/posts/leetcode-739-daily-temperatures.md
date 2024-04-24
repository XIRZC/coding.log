---
title: "LeetCode 739 - 每日温度"
pubDate: "2024-4-22"
categories: ["LeetCode"]
description: "每日温度"
---

## 每日温度 - 暴力做法

时间：`O(N^2)` 空间： `O(1)`

```c++
class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        vector<int> res;
        for (int i = 0; i < temperatures.size(); i++) {
            int j = i + 1;
            for (j = i + 1; j < temperatures.size(); j++) {
                if (temperatures[i] < temperatures[j]) {
                    res.push_back(j - i);
                    break;
                }
            }
            if (j == temperatures.size()) res.push_back(0);
        }
        return res;
    }
};
```

## 单调栈 - 从右往左做法

时间：`O(N)` 空间：`O(N)`

```c++
// vector模拟栈
class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        vector<int> res;
        vector<int> stack;
        for (int i = temperatures.size() - 1; i >= 0; i--) {
            int x = temperatures[i];
            while (stack.size() && temperatures[stack.back()] <= x) stack.pop_back();
            if (stack.size()) res.push_back(stack.back() - i);
            else res.push_back(0);
            stack.push_back(i);
        }
        reverse(res.begin(), res.end());
        return res;
    }
};

// 数组模拟栈
const int N = 100010;

class Solution {
public:

    int stack[N], top = 0;

    vector<int> dailyTemperatures(vector<int>& temperatures) {
        vector<int> res;
        for (int i = temperatures.size() - 1; i >= 0; i--) {
            int x = temperatures[i];
            while (top && temperatures[stack[top]] <= x) top--;
            if (top) res.push_back(stack[top] - i);
            else res.push_back(0);
            stack[++top] = i;
        }
        reverse(res.begin(), res.end());
        return res;
    }
};
```

> [https://leetcode.cn/problems/daily-temperatures](https://leetcode.cn/problems/daily-temperatures)
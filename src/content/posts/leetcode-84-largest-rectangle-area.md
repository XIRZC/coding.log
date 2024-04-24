---
title: "LeetCode 84 - 柱形图中最大的矩形"
pubDate: "2024-4-22"
categories: ["LeetCode"]
description: "柱形图中最大的矩形"
---

## 柱形图中最大的矩形 - 朴素做法

时间：`O(N^3)` 空间： `O(1)`

```c++
// 87/99
class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        int n = heights.size();
        int res = INT_MIN;
        for (int l = 1; l <= n; l++) {
            for (int i = 0; i < n - l + 1; i++) {
                int minh = INT_MAX;
                for (int k = i; k <= i + l - 1; k++) minh = min(minh, heights[k]);
                res = max(res, minh * l);
            }
        }
        return res;
    }
};
```

## 柱形图中最大的矩形 - 朴素做法优化

时间： `O(N^2)` 空间：`O(1)`

```c++
// 89/99
class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        int n = heights.size();
        int res = INT_MIN;
        for (int i = 0; i < n; i++) {
            int minh = INT_MAX;
            for (int j = i; j < n; j++) {
                minh = min(heights[j], minh);
                res = max(res, minh * (j - i + 1));
            }
        }
        return res;
    }
};

// 93/99
class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        int n = heights.size();
        int res = INT_MIN;
        for (int i = 0; i < n; i++) {
            int h = heights[i], l = i - 1, r = i + 1;
            while (l >= 0 && heights[l] >= h) l--;
            l++;
            while (r <= n - 1 && heights[r] >= h) r++;
            r--;
            res = max(res, (r - l + 1) * h);
        }
        return res;
    }
};
```

## 柱形图中最大的矩形 - 

时间：`O(N^2)` 空间：`O(1)`

```c++
typedef pair<int, int> PII;

class Solution {
public:

    vector<int> ls, rs;
    vector<PII> tmp;

    int largestRectangleArea(vector<int>& heights) {
        int n = heights.size();
        int res = INT_MIN;
        for (int i = 0; i < n; i++) {
            int h = heights[i];
            while (ls.size() && heights[ls.back()] >= h) ls.pop_back();
            if (ls.size()) tmp.push_back({ls.back(), 0});
            else tmp.push_back({-1, 0});
            ls.push_back(i);
        }
        for (int i = n - 1; i >= 0; i--) {
            int h = heights[i];
            while (rs.size() && heights[rs.back()] >= h) rs.pop_back();
            if (rs.size()) tmp[i].second = rs.back();
            else tmp[i].second = n;
            rs.push_back(i);
        }
        for (int i = 0; i < n; i++) {
            int h = heights[i];
            auto [l, r] = tmp[i];
            l++;
            r--;
            res = max(res, (r - l + 1) * h);
        }
        return res;
    }
};

// 一个栈优化
class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        int n = heights.size();
        vector<int> ls, left(n, 0), right(n, n);
        int res = INT_MIN;
        for (int i = 0; i < n; i++) {
            int h = heights[i];
            while (ls.size() && heights[ls.back()] >= h) {
                right[ls.back()] = i;
                ls.pop_back();
            }
            if (ls.size()) left[i] = ls.back();
            else left[i] = -1;
            ls.push_back(i);
        }
        for (int i = 0; i < n; i++) {
            int h = heights[i];
            res = max(res, (right[i] - left[i] - 1) * h);
        }
        return res;
    }
};
```

> [https://leetcode.cn/problems/largest-rectangle-in-histogram](https://leetcode.cn/problems/largest-rectangle-in-histogram)
---
title: "LeetCode 240 - 搜索二维矩阵II"
pubDate: "2024-4-22"
categories: ["LeetCode"]
description: "搜索二维矩阵II"
---

## 搜索二维矩阵II - 朴素做法

时间：`O(N^2)` 空间： `O(1)`

```c++
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int n = matrix.size(), m = matrix[0].size();
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (matrix[i][j] == target) return true;
            }
        }
        return false;
    }
};
```

## 搜索二维矩阵II - 二分

时间：`O(NLogN)` 空间：`O(1)`

```c++
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int n = matrix.size(), m = matrix[0].size();
        for (int i = 0; i < n; i++) {
            int l = 0, r = m - 1;
            while (l <= r) {
                int m = l + r >> 1;
                if (matrix[i][m] == target) return true;
                else if (matrix[i][m] < target) l = m + 1;
                else r = m - 1;
            }
        }
        return false;
    }
};
```

## 搜索二维矩阵II - Z形搜索

```c++
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int n = matrix.size(), m = matrix[0].size();
        int rtx = 0, rty = m - 1;
        while (rtx <= n - 1 && rty >= 0) {
            if (matrix[rtx][rty] == target) return true;
            else if (matrix[rtx][rty] > target) rty--;
            else rtx++;
        }
        return false;
    }
};
```

> [https://leetcode.cn/problems/search-a-2d-matrix-ii](https://leetcode.cn/problems/search-a-2d-matrix-ii)

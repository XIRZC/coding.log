---
title: "LeetCode 79 - 单词搜索"
pubDate: "2024-4-21"
categories: ["LeetCode"]
description: "单词搜索"
---

## 单词搜索

时间：`O(NM . 3^L)` 空间： `O(MN)`

```c++
const int N = 10;

class Solution {
public:

    int n, m;
    bool st[N][N];
    int dirc[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

    bool backtrack(int i, int j, int cnt, vector<vector<char>>& board, string& tgt) {
        if (board[i][j] != tgt[cnt]) return false;
        if (cnt == tgt.size() - 1) return true;
        st[i][j] = true;
        for (int k = 0; k < 4; k++) {
            int ni = i + dirc[k][0], nj = j + dirc[k][1];
            if (ni >= 0 && ni < n && nj >= 0 && nj < m && !st[ni][nj]) {
                if(backtrack(ni, nj, cnt + 1, board, tgt)) return true;
            }
        }
        st[i][j] = false;
        return false;
    }

    bool exist(vector<vector<char>>& board, string word) {
        n = board.size(), m = board[0].size();
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (backtrack(i, j, 0, board, word)) return true;
            }
        }
        return false;
    }
};
```

> [https://leetcode.cn/problems/word-search](https://leetcode.cn/problems/word-search)

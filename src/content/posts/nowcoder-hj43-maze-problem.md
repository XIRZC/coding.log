---
title: "NowCoder HJ43 - 迷宫问题"
pubDate: "2024-4-23"
categories: ["NowCoder"]
description: "迷宫问题"
---

## 迷宫问题 - BFS

时间：`O(N^2)` 空间： `O(N^2)`

```c++
#include <iostream>
#include <queue>

using namespace std;

const int N = 15;
int n, m, grid[N][N], path[N][N];
int dirc[4][2] = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};

int main() {
    cin >> n >> m;
    for (int i = 0 ; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> grid[i][j];
        }
    }
    queue<int> q;
    q.push(0);
    grid[0][0] = 1;
    while (q.size()) {
        int f = q.front();
        q.pop();
        int fi = f / m, fj = f % m;
        if (fi == n - 1 && fj == m - 1) break;
        for (int k = 0; k < 4; k++) {
            int nfi = fi + dirc[k][0], nfj = fj + dirc[k][1];
            if (nfi >= 0 && nfi < n && nfj >= 0 && nfj < m && grid[nfi][nfj] == 0) {
                path[nfi][nfj] = fi * m + fj;
                grid[nfi][nfj] = 1;
                q.push(nfi * m + nfj);
            }
        }
    }
    int i = n - 1, j = m -  1;
    vector<int> tmp;
    while (i != 0 || j != 0) {
        tmp.push_back(i * m + j);
        int p = path[i][j];
        i = p / m, j = p % m;
    }
    tmp.push_back(0);
    for (int i = tmp.size() - 1; i >= 0; i--) {
        int item = tmp[i];
        printf("(%d,%d)\n", item / m, item % m);
    }
    return 0;
}
```

## 迷宫问题 - DFS

时间：`O(N^2)` 空间：`O(N^2)`

```c++
#include <iostream>
#include <algorithm>
#include <queue>

using namespace std;

typedef pair<int, int> PII;

const int N = 15;
int n, m, grid[N][N];
int dirc[4][2] = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
vector<PII> path;

bool dfs(int i, int j) {
    if (i == n - 1 && j == m - 1) return true;
    for (int k = 0; k < 4; k++) {
        int ni = i + dirc[k][0], nj = j + dirc[k][1];
        if (ni >= 0 && ni < n && nj >= 0 && nj < m && grid[ni][nj] == 0) {
            grid[ni][nj] = 1;
            if (dfs(ni, nj)) {
                path.push_back({ni, nj});
                return true;
            }
            grid[ni][nj] = 0;
        }
    }
    return false;
}

int main() {
    cin >> n >> m;
    for (int i = 0 ; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> grid[i][j];
        }
    }
    dfs(0, 0);
    path.push_back({0, 0});
    reverse(path.begin(), path.end());
    for (auto item : path) printf("(%d,%d)\n", item.first, item.second);
    return 0;
}
```

> [https://www.nowcoder.com/practice/cf24906056f4488c9ddb132f317e03bc](https://www.nowcoder.com/practice/cf24906056f4488c9ddb132f317e03bc)
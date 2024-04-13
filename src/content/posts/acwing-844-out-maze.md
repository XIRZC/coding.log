---
title: "AcWing 844 - 走迷宫"
pubDate: "2024-4-11"
categories: ["AcWing"]
description: "走迷宫"
---

## 走迷宫

时间：`O(N^2)` 空间： `O(N^2)`

```c++
#include <iostream>
#include <queue>

using namespace std;

const int N = 110;
int maze[N][N];
int dire[4][2] = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};

int main() {
    int n, m, ans = 0;
    cin >> n >> m;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++) scanf("%d", &maze[i][j]);
    queue<int> q;
    q.push(0);
    bool flag = false;
    while (!q.empty()) {
        int size = q.size();
        for (int s = 0; s < size; s++) {
            int k = q.front();
            q.pop();
            int i = k / m, j = k % m;
            if (i == n - 1 && j == m - 1) {
                flag = true;
                break;
            }
            for (int z = 0; z < 4; z++) {
                int ni = i + dire[z][0], nj = j + dire[z][1];
                if (ni >= 0 && ni < n && nj >= 0 && nj < m && maze[ni][nj] == 0) {
                    q.push(ni * m + nj);
                    maze[ni][nj] = 1;
                }
            }
        }
        if (flag) break;
        ans++;
    }
    cout << ans;
    return 0;
}
```

> [https://www.acwing.com/problem/content/846/](https://www.acwing.com/problem/content/846/)

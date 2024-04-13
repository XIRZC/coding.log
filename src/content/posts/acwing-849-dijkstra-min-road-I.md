---
title: "AcWing 849 - Dijkstra求最短I"
pubDate: "2024-4-11"
categories: ["AcWing"]
description: "Dijkstra求最短I"
---

## Dijkstra 求最短路 I

稠密图使用邻接矩阵：`N * N ~= M`

时间：`O(N^2)` 空间： `O(N^2)`

```c++
#include <iostream>
#include <cstring>

using namespace std;

const int N = 510, INF = 0x3f3f3f3f;
int n, m, d[N], g[N][N];
bool st[N];

int dijkstra() {
    memset(d, 0x3f, sizeof d);
    d[1] = 0;
    for (int i = 1; i <= n; i++) {
        int t = -1;
        for (int j = 1; j <= n; j++) {
            if (!st[j] && (t == -1 || d[t] > d[j])) t = j;
        }
        st[t] = true;
        for (int j = 1; j <= n; j++) d[j] = min(d[j], d[t] + g[t][j]);
    }
    if (d[n] == INF) return -1;
    else return d[n];
}

int main() {
    cin >> n >> m;
    memset(g, 0x3f, sizeof g);
    while (m--) {
        int a, b, c;
        cin >> a >> b >> c;
        g[a][b] = min(g[a][b], c);
    }
    cout << dijkstra();
    return 0;
}
```

> [https://www.acwing.com/problem/content/851/](https://www.acwing.com/problem/content/851/)

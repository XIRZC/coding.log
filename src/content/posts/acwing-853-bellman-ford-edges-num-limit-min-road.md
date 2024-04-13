---
title: "AcWing 853 - 有边数限制或有负权边的最短路"
pubDate: "2024-4-12"
categories: ["AcWing"]
description: "有边数限制或有负权边的最短路，可解决负权回路问题"
---

## 有边数限制或有负权边的最短路

时间：`O(NM)` 空间： `O(M)`

```c++
#include <iostream>
#include <cstring>

using namespace std;

const int N = 510, M = 100010, INF = 0x3f3f3f3f;

struct Edge {
   int x, y, z;
} edges[M];
int n, m, k;
int d[N], backup[N];

int bellman_ford() {
    memset(d, 0x3f, sizeof d);
    d[1] = 0;
    // K 条边的限制，若无限制则为N条
    for (int i = 0; i < k; i++) {
        // 这一次更新要用上一次d的结果，而不是这一轮部分被更新过的d
        memcpy(backup, d, sizeof d);
        for (int j = 0; j < m; j++) {
            auto [x, y, z] = edges[j];
            d[y] = min(d[y], backup[x] + z);
        }
    }
    // 由于存在负权边，因此有可能小于INF，但一般不会小于INF / 2
    if (d[n] > INF / 2) return INF;
    else return d[n];
}

int main() {
    cin >> n >> m >> k;
    for (int i = 0; i < m; i++) {
        int x, y, z;
        cin >> x >> y >> z;
        edges[i] = {x, y, z};
    }
    int t = bellman_ford();
    if (t == INF) cout << "impossible";
    else cout << t;
    return 0;
}
```

> [https://www.acwing.com/problem/content/855/](https://www.acwing.com/problem/content/855/)

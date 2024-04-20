---
title: "AcWing 850 - Dijkstra求最短路II"
pubDate: "2024-4-11"
categories: ["AcWing"]
description: "Dijkstra求最短路II"
---

## Dijkstra 求最短路 II

稀疏图使用邻接表：`N ~= M`

时间：`O(NLogM)` 空间： `O(M)`

堆优化 Dijkstra，使用堆来维护最短距离

```c++
#include <iostream>
#include <cstring>
#include <algorithm>
#include <queue>

using namespace std;

typedef pair<int, int> PII;

const int N = 1000010, INF = 0x3f3f3f3f;
int h[N], e[N], w[N], ne[N], idx = 0, d[N], n, m;
bool st[N];

void add(int a, int b, int c) {
    e[idx] = b;
    w[idx] = c;
    ne[idx] = h[a];
    h[a] = idx++;
}

int dijkstra() {
    priority_queue<PII, vector<PII>, greater<PII>> heap;
    heap.push({0, 1});
    memset(d, 0x3f, sizeof d);
    d[1] = 0;
    while (heap.size()) {
        PII f = heap.top();
        heap.pop();
        int ver = f.second, dist = f.first;
        if (st[ver]) continue;
        st[ver] = true;
        for (int i = h[ver]; i != -1; i = ne[i]) {
            int j = e[i];
            int wt = w[i];
            if (wt + dist < d[j]) {
                d[j] = wt + dist;
                heap.push({d[j], j});
            }
        }
    }
    if (d[n] == INF) return -1;
    else return d[n];
}

int main() {
    cin >> n >> m;
    memset(h, -1, sizeof h);
    while (m--) {
        int a, b, c;
        cin >> a >> b >> c;
        add(a, b, c);
    }
    cout << dijkstra();
    return 0;
}
```

> [https://www.acwing.com/problem/content/852/](https://www.acwing.com/problem/content/852/)

---
title: "AcWing 851 - spfa求最短路"
pubDate: "2024-4-12"
categories: ["AcWing"]
description: "SPFA求最短路，有负权边"
---

## 负权边的最短路 - SPFA

时间：`O(N)` 最坏: `O(NM)` 空间： `O(M)`

```c++
#include <iostream>
#include <cstring>
#include <queue>

using namespace std;

const int N = 1000010, INF = 0x3f3f3f3f;
int h[N], e[N], w[N], ne[N], idx = 0;
int n, m;
int d[N];
bool st[N];

void add(int x, int y, int z) {
    e[idx] = y;
    w[idx] = z;
    ne[idx] = h[x];
    h[x] = idx++;
}

int spfa() {
    memset(d, 0x3f, sizeof d);
    d[1] = 0;
    queue<int> q;
    q.push(1);
    st[1] = true;
    while (q.size()) {
        auto f = q.front();
        q.pop();
        st[f] = false;
        for (int i = h[f]; i != -1; i = ne[i]) {
            int j = e[i];
            int wt = w[i];
            if (d[f] + wt < d[j]) {
                d[j] = wt + d[f];
                if (!st[j]) {
                    q.push(j);
                    st[j] = true;
                }
            }
        }
    }
    return d[n];
}

int main() {
    cin >> n >> m;
    memset(h, -1, sizeof h);
    while (m--) {
        int x, y, z;
        cin >> x >> y >> z;
        add(x, y, z);
    }
    int t = spfa();
    if (t == INF) puts("impossible");
    else cout << t;
    return 0;
}
```

> [https://www.acwing.com/problem/content/853/](https://www.acwing.com/problem/content/853/)

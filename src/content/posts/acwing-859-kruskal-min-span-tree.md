---
title: "AcWing 859 - Kruskal算法求最小生成树"
pubDate: "2024-4-12"
categories: ["AcWing"]
description: "Kruskal算法求最小生成树"
---

## Kruskal 算法求最小生成树

时间：`O(MLogM)` 空间： `O(M)`

```c++
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 100010, M = 200010;

struct Edge {
    int u, v, w;
    bool operator< (const Edge & other)const {
        return w < other.w;
    }
} edges[M];
int n, m, p[N];

int find(int x) {
    if (p[x] != x) p[x] = find(p[x]);
    return p[x];
}

int main() {
    cin >> n >> m;
    for (int i = 1; i <= n; i++) p[i] = i;
    for (int i = 0; i < m; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        edges[i] = {u, v, w};
    }
    sort(edges, edges + m);
    int cnt = 0, sum = 0;
    for (int i = 0; i < m; i++) {
        auto [u, v, w] = edges[i];
        int pu = find(u), pv = find(v);
        if (pu != pv) {
            p[pu] = pv;
            sum += w;
            cnt++;
        }
    }
    if (cnt != n - 1) cout << "impossible";
    else cout << sum;
    return 0;
}
```

> [https://www.acwing.com/problem/content/861/](https://www.acwing.com/problem/content/861/)

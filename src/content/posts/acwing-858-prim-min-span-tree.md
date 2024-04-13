---
title: "AcWing 858 - Prim算法求最小生成树"
pubDate: "2024-4-12"
categories: ["AcWing"]
description: "Prim算法求最小生成树"
---

## 朴素 Prim 算法

时间：`O(N^2)` 空间： `O(N^2)`

```c++
#include <iostream>
#include <cstring>

using namespace std;

const int N = 510, INF = 0x3f3f3f3f;
int d[N], g[N][N];
int n, m;
bool st[N];

int prim() {
    int res = 0;
    memset(d, 0x3f, sizeof d);
    for (int i = 0; i < n; i++) {
        int t = -1;
        for (int j = 1; j <= n; j++) {
            if (!st[j] && (t == -1 || d[t] > d[j])) t = j;
        }
        if (i && d[t] == INF) {
            res = INF;
            break;
        }
        if (i) res += d[t];
        for (int j = 1; j <= n; j++) d[j] = min(d[j], g[t][j]);
        st[t] = true;
    }
    return res;
}

int main() {
    cin >> n >> m;
    memset(g, 0x3f, sizeof g);
    while (m--) {
        int a, b, c;
        cin >> a >> b >> c;
        g[a][b] = g[b][a] = min(g[a][b], c);
    }
    int t = prim();
    if (t == INF) cout << "impossible";
    else cout << t;
    return 0;
}
```

## 堆优化 Prim 算法

```c++
#include <iostream>
#include <cstring>
#include <queue>

using namespace std;

typedef pair<int, int> PII;

const int N = 510, M = 200010, INF = 0x3f3f3f3f;
int d[N], n, m;
int h[N], e[M], ne[M], w[M], idx = 0;
bool st[N];

void add(int a, int b, int c) {
    e[idx] = b;
    w[idx] = c;
    ne[idx] = h[a];
    h[a] = idx++;
}

int prim() {
    int res = 0, cnt = 0;
    memset(d, 0x3f, sizeof d);
    priority_queue<PII, vector<PII>, greater<PII>> heap;
    heap.push({0, 1});
    while (heap.size()) {
        auto f = heap.top();
        heap.pop();

        int v = f.second, dist = f.first;
        if (st[v]) continue;
        st[v] = true;
        res += dist;
        cnt++;

        for (int i = h[v]; i != -1; i = ne[i]) {
            int j = e[i];
            int wt = w[i];
            if (!st[j] && wt < d[j]) {
                d[j] = wt;
                heap.push({d[j], j});
            }
        }
    }
    if (cnt != n) return INF;
    return res;
}

int main() {
    cin >> n >> m;
    memset(h, -1, sizeof h);
    while (m--) {
        int a, b, c;
        cin >> a >> b >> c;
        add(a, b, c);
        add(b, a, c);
    }
    int t = prim();
    if (t == INF) cout << "impossible";
    else cout << t;
    return 0;
}
```

> [https://www.acwing.com/problem/content/860/](https://www.acwing.com/problem/content/860/)

---
title: "AcWing 848 - 有向图的拓扑序列"
pubDate: "2024-4-12"
categories: ["AcWing"]
description: "有向图的拓扑序列"
---

## 有向无环图拓扑排序 - 图 BFS - 手动模拟队列

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>
#include <cstring>

using namespace std;

const int N = 100010;
int q[N], fr = 1, bk = 0;
int h[N], e[N], ne[N], idx = 0;
int n, m;
int d[N];

void add(int a, int b) {
    e[idx] = b;
    ne[idx] = h[a];
    h[a] = idx++;
}

bool topo() {
    for (int i = 1; i <= n; i++) {
        if (d[i] == 0) q[++bk] = i;
    }
    int cnt = 0;
    while (bk >= fr) {
        int f = q[fr++];
        cnt++;
        for (int i = h[f]; i != -1; i = ne[i]) {
            int j = e[i];
            d[j]--;
            if (d[j] == 0) q[++bk] = j;
        }
    }
    if (cnt < n) return false;
    return true;
}

int main() {
    cin >> n >> m;
    memset(h, -1, sizeof h);
    while (m--) {
        int a, b;
        cin >> a >> b;
        add(a, b);
        d[b]++;
    }
    if (topo()) {
        for (int i = 1; i <= n; i++) cout << q[i] << ' ';
    }
    else cout << -1;
    return 0;
}
```

## STL 队列

```c++
#include <iostream>
#include <cstring>
#include <vector>
#include <queue>

using namespace std;

const int N = 100010;
int h[N], e[N], ne[N], idx = 0;
int n, m;
int d[N];
vector<int> seq;

void add(int a, int b) {
    e[idx] = b;
    ne[idx] = h[a];
    h[a] = idx++;
}

bool topo() {
    queue<int> q;
    for (int i = 1; i <= n; i++) {
        if (d[i] == 0) q.push(i);
    }
    while (q.size()) {
        int f = q.front();
        q.pop();
        seq.push_back(f);
        for (int i = h[f]; i != -1; i = ne[i]) {
            int j = e[i];
            d[j]--;
            if (d[j] == 0) q.push(j);
        }
    }
    if (seq.size() < n) return false;
    return true;
}

int main() {
    cin >> n >> m;
    memset(h, -1, sizeof h);
    while (m--) {
        int a, b;
        cin >> a >> b;
        add(a, b);
        d[b]++;
    }
    if (topo()) {
        for (auto item : seq) cout << item << ' ';
    }
    else cout << -1;
    return 0;
}
```

> [https://www.acwing.com/problem/content/850/](https://www.acwing.com/problem/content/850/)

---
title: "AcWing 861 - 二分图的最大匹配"
pubDate: "2024-4-13"
categories: ["AcWing"]
description: "二分图的最大匹配"
---

## 匈牙利算法计算二分图最大匹配数

时间：`O(M)` 空间： `O(M)`

```c++
#include <iostream>
#include <cstring>

using namespace std;

const int N = 510, M = 100010;
int h[N], e[M], ne[M], idx = 0;
int match[N];
bool st[N];
int n1, n2, m;

void add(int a, int b) {
    e[idx] = b;
    ne[idx] = h[a];
    h[a] = idx++;
}

bool find(int x) {
    for (int i = h[x]; i != -1; i = ne[i]) {
        int j = e[i];
        if (!st[j]) {
            st[j] = true;
            if (!match[j] || find(match[j])) {
                match[j] = x;
                return true;
            }
        }
    }
    return false;
}

int main() {
    cin >> n1 >> n2 >> m;
    memset(h, -1, sizeof h);
    while (m--) {
        int u, v;
        cin >> u >> v;
        add(u, v);
    }
    int cnt = 0;
    for (int i = 1; i <= n1; i++) {
        memset(st, false, sizeof st);
        if (find(i)) cnt++;
    }
    cout << cnt;
    return 0;
}
```

> [https://www.acwing.com/problem/content/863/](https://www.acwing.com/problem/content/863/)

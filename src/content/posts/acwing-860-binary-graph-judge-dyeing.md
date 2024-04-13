---
title: "AcWing 860 - 染色法判定二分图"
pubDate: "2024-4-12"
categories: ["AcWing"]
description: "染色法判定二分图"
---

## 染色法判定二分图

一个图为二分图：两个图中点的集合，其中两个集合中结点不存在边，只有两个集合间结点存在边

一个图为二分图 等价于 图中没有奇数环 等价于 图中没有边数为奇数的环

染色法可用于判定图中是否有奇数环

时间：`O(M)` 空间： `O(M)`

```c++
#include <iostream>
#include <cstring>

using namespace std;

const int N = 200010;
int h[N], e[N], ne[N], idx = 0;
int color[N];
int n, m;

void add(int a, int b) {
    e[idx] = b;
    ne[idx] = h[a];
    h[a] = idx++;
}

bool dfs(int node, int c) {
    color[node] = c;
    for (int i = h[node]; i != -1; i = ne[i]) {
        int j = e[i];
        if (!color[j]) {
             if (!dfs(j, 3 - c)) return false;
        }
        else {
            if (color[j] == c) return false;
        }
    }
    return true;
}

int main() {
    cin >> n >> m;
    memset(h, -1, sizeof h);
    while (m--) {
        int a, b;
        cin >> a >> b;
        add(a, b);
        add(b, a);
    }
    bool flag = true;
    for (int i = 1; i <= n; i++) {
        if (!color[i]) {
            if (!dfs(i, 1)) {
                flag = false;
                break;
            }
        }
    }
    if (flag) cout << "Yes";
    else cout << "No";
    return 0;
}
```

> [https://www.acwing.com/problem/content/862/](https://www.acwing.com/problem/content/862/)

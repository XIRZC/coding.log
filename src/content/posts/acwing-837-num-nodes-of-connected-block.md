---
title: "AcWing 837 - 连通块中点的数量"
pubDate: "2024-4-10"
categories: ["AcWing"]
description: "并查集-连通块中点的数量"
---

## 并查集-维护集合大小

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>

using namespace std;

const int N = 100010;
int p[N], d[N];
int n, m;

int find(int x) {
    if (x != p[x]) p[x] = find(p[x]);
    return p[x];
}

void merge(int a, int b) {
    int pa = find(a);
    int pb = find(b);
    if (pa != pb) {
        p[pa] = pb;
        d[pb] += d[pa];
    }
}

int main() {
    cin >> n >> m;
    for (int i = 1; i <= n; i++) {
        p[i] = i;
        d[i] = 1;
    }
    while (m--) {
        string op;
        int a, b;
        cin >> op;
        if (op == "Q1") {
            cin >> a >> b;
            puts(find(a) == find(b) ? "Yes" : "No");
        }
        else if (op == "Q2") {
            cin >> a;
            cout << d[find(a)] << endl;
        }
        else {
            cin >> a >> b;
            merge(a, b);
        }
    }
    return 0;
}
```

> [https://www.acwing.com/problem/content/839/](https://www.acwing.com/problem/content/839/)

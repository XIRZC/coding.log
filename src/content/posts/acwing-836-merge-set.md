---
title: "AcWing 836 - 合并集合"
pubDate: "2024-4-10"
categories: ["AcWing"]
description: "并查集-合并集合"
---

## 并查集

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>

using namespace std;

const int N = 100010;

int p[N];
int n, m;

int find(int x) {
    if (p[x] != x) p[x] = find(p[x]);
    return p[x];
}

void merge(int a, int b) {
    int pa = find(a);
    int pb = find(b);
    p[pa] = pb;
}

int main() {
    cin >> n >> m;
    for (int i = 1; i <= n; i++) p[i] = i;
    while (m--) {
        int a, b;
        string op;
        cin >> op >> a >> b;
        if (op[0] == 'M') merge(a, b);
        else puts(find(a) == find(b) ? "Yes" : "No");
    }
    return 0;
}
```

> [https://www.acwing.com/problem/content/838/](https://www.acwing.com/problem/content/838/)

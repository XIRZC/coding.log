---
title: "AcWing 240 - 食物链"
pubDate: "2024-4-10"
categories: ["AcWing"]
description: "并查集-食物链-维护到根节点之间的距离"
---

## 并查集-维护额外距离

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>

using namespace std;

const int N = 50010;
int p[N], d[N];
int n, m, res = 0;

int find(int x) {
    if (x != p[x]) {
        int tmp = find(p[x]);
        d[x] += d[p[x]];
        p[x] = tmp;
    }
    return p[x];
}

int main() {
    cin >> n >> m;
    for (int i = 1; i <= n; i++) p[i] = i;
    while (m--) {
        int t, x, y;
        cin >> t >> x >> y;
        if (x > n || y > n) res++;
        else {
            int px = find(x), py = find(y);
            if (t == 1) {
                if (px == py) {
                    if ((d[x] - d[y]) % 3) res++;
                }
                else {
                    p[px] = py;
                    d[px] = d[y] - d[x];
                }
            }
            else {
                if (px == py) {
                    if (x == y || (d[x] - 1 - d[y]) % 3) res++;
                }
                else {
                    p[px] = py;
                    d[px] = d[y] - d[x] + 1;
                }
            }
        }
    }
    cout << res;
    return 0;
}
```

> [https://www.acwing.com/problem/content/242/](https://www.acwing.com/problem/content/242/)

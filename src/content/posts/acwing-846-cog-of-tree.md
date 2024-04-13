---
title: "AcWing 846 - 树的重心"
pubDate: "2024-4-11"
categories: ["AcWing"]
description: "树的重心"
---

## BFS 遍历图 - 邻接表法构建图

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>
#include <cstring>

using namespace std;

const int N = 100010, M = 2 * N;
int h[N], e[M], ne[M], idx = 0, n, res = 0x3f3f3f3f;
bool visited[N];

void add(int a, int b) {
    e[idx] = b;
    ne[idx] = h[a];
    h[a] = idx++;
}

int dfs(int x) {
    if (x == -1) return 0;
    int sum = 1, max_num = 0;
    for (int i = h[x]; i != -1; i = ne[i]) {
        int j = e[i];
        if (!visited[j]) {
            visited[j] = true;
            int num = dfs(j);
            max_num = max(max_num, num);
            sum += num;
        }
    }
    max_num = max(max_num, n - sum);
    res = min(res, max_num);
    return sum;
}

int main() {
    cin >> n;
    memset(h, -1, sizeof h);
    for (int i = 0; i < n - 1; i++) {
        int a, b;
        cin >> a >> b;
        add(a, b);
        add(b, a);
    }
    visited[1] = true;
    dfs(1);
    cout << res;
    return 0;
}
```

> [https://www.acwing.com/problem/content/848/](https://www.acwing.com/problem/content/848/)

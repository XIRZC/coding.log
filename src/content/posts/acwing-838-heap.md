---
title: "AcWing 838 - 堆排序"
pubDate: "2024-4-11"
categories: ["AcWing"]
description: "模拟堆"
---

## 堆排序

时间：`O(NLogM)` 空间： `O(N)`
建堆：`O(N)`
查询堆顶：`O(1)`
插入：`O(LogN)`
删除：`O(LogN)`

```c++
#include <iostream>

using namespace std;

const int N = 100010;
int h[N], sz = 0, n, m;

void down(int t) {
    int u = t;
    if (2 * t <= sz && h[2 * t] < h[u]) u = 2 * t;
    if (2 * t + 1 <= sz && h[2 * t + 1] < h[u]) u = 2 * t + 1;
    if (u != t) {
        swap(h[u], h[t]);
        down(u);
    }
}

int main() {
    cin >> n >> m;
    for (int i = 1; i <= n; i++) cin >> h[i];
    sz = n;
    for (int i = n / 2; i >= 0; i--) down(i);
    while (m--) {
        cout << h[1] << ' ';
        h[1] = h[sz];
        sz--;
        down(1);
    }
    return 0;
}
```

> [https://www.acwing.com/problem/content/840/](https://www.acwing.com/problem/content/840/)

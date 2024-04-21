---
title: "Interview 1 - 合并两个有序数组并去重"
pubDate: "2024-4-21"
categories: ["Interview"]
description: "合并两个有序数组并去重"
---

## 合并两个有序数组并去重

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>

using namespace std;

const int N = 1010;
int a[N], b[N], c[N];
int n, m;

int main() {
    cin >> n >> m;
    for (int i = 0; i < n; i++) cin >> a[i];
    for (int j = 0; j < m; j++) cin >> b[j];
    int i = 0, j = 0, idx = 0;
    while (i < n && j < m) {
        if (a[i] <= b[j]) c[idx++] = a[i++];
        else c[idx++] = b[j++];
    }
    while (i < n) c[idx++] = a[i++];
    while (j < m) c[idx++] = b[j++];
    for (int i = 0; i < idx; i++) {
        if (!i || c[i] != c[i - 1]) cout << c[i] << ' ';
    }
    return 0;
}
```
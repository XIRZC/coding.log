---
title: "AcWing 896 - 最长上升子序列II"
pubDate: "2024-4-19"
categories: ["AcWing"]
description: "最长上升子序列II"
---

## 最长上升子序列II

时间：`O(NLogN)` 空间： `O(N)`

这里子序列并不单是指连续区间，也可以是不连续的

偏贪心思想

```c++
#include <iostream>

using namespace std;

const int N = 100010;
int a[N], q[N];
int n;

int main() {
    cin >> n;
    for (int i = 0; i < n; i++) cin >> a[i];
    int len = 0;
    for (int i = 0; i < n; i++) {
        int l = 0, r = len;
        while (l < r) {
            int mid = l + r + 1 >> 1;
            if (q[mid] < a[i]) l = mid;
            else r = mid - 1;
        }
        q[r + 1] = a[i];
        if (r + 1 > len) len = r + 1;
    }
    cout << len;
    return 0;
}
```

> [https://www.acwing.com/problem/content/898/](https://www.acwing.com/problem/content/898/)

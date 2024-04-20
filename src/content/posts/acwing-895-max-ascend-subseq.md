---
title: "AcWing 895 - 最长上升子序列"
pubDate: "2024-4-19"
categories: ["AcWing"]
description: "最长上升子序列"
---

## 最长上升子序列

时间：`O(N^2)` 空间： `O(N)`

这里子序列并不单是指连续区间，也可以是不连续的

状态转移：dp[i] = max(1, dp[1] + 1, ..., dp[i - 1] + 1)

```c++
#include <iostream>

using namespace std;

const int N = 1010;
int n, res = 0;
int dp[N], a[N];

int main() {
    cin >> n;
    for (int i = 1; i <= n; i++) {
        cin >> a[i];
        dp[i] = 1;
        for (int j = 1; j < i; j++) {
            if (a[j] < a[i]) dp[i] = max(dp[j] + 1, dp[i]);
        }
        res = max(res, dp[i]);
    }
    cout << res;
    return 0;
}
```

> [https://www.acwing.com/problem/content/1003/](https://www.acwing.com/problem/content/1003/)
